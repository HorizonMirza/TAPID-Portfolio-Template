"""Build and verify the public Astro portfolio gallery for GitHub Pages."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import argparse
import json
import os
import re
import shutil
import subprocess
from tempfile import TemporaryDirectory


ROOT = Path(__file__).resolve().parents[2]
SITE = "https://horizonmirza.github.io/TAPID-Portfolio-Template/"
BASE = urlsplit(SITE).path
THEMES = ("Teknologi", "Asuransi", "Management", "DKV", "General", "Finance")
HTML_URL = re.compile(r"""(\b(?:href|src|poster|action)\s*=\s*)(["'])/(?!/)([^"']*)(\2)""")
CSS_URL = re.compile(r"""(url\(\s*["']?)/(?!/)""")


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.links = []
        self.ids = set()
        self.feed(source)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        self.links.extend(attrs[attr] for attr in ("href", "src", "poster") if attrs.get(attr))


def check_links(output):
    pages = {
        file: Page(file.read_text(encoding="utf-8"))
        for file in output.rglob("*.html")
    }
    for file, page in pages.items():
        for address in page.links:
            url = urlsplit(address)
            if (url.scheme or url.netloc) and not address.startswith(SITE):
                continue
            pathname = unquote(url.path)
            if pathname.startswith(BASE):
                target = output / pathname.removeprefix(BASE)
            elif pathname.startswith("/"):
                raise ValueError(f"{file} references a path outside the site: {address}")
            elif pathname:
                target = file.parent / pathname
            else:
                target = file
            if target.is_dir():
                target = target / "index.html"
            if not target.is_file():
                raise ValueError(f"{file} references a missing path: {address}")
            target_page = pages.get(target.resolve())
            if url.fragment and target_page and unquote(url.fragment) not in target_page.ids:
                raise ValueError(f"{file} has no target for {address} in {target}")


def build_sites(output, require_install, prebuilt):
    npm = shutil.which("npm.cmd" if os.name == "nt" else "npm")
    if not npm:
        raise RuntimeError("npm must be installed")

    for number, theme in enumerate(THEMES, 1):
        slug = theme.lower()
        frontend = ROOT / f"Portfolio {number} - {theme}" / "Frontend"
        data = json.loads((frontend / "src/portfolio.json").read_text(encoding="utf-8"))
        if not data["settings"]["demo"] or data["profile"].get("cvUrl") or any(
            not link.get("sample") for link in data["contact"]["links"]
        ):
            raise ValueError(f"{theme} must use demo-only contact data in the public gallery")
        env = {**os.environ, "ASTRO_TELEMETRY_DISABLED": "1", "TAPID_SITE_URL": f"{SITE}{slug}/"}
        if not prebuilt:
            if require_install:
                subprocess.run([npm, "ci"], cwd=frontend, env=env, check=True)
            for command in ("check", "build"):
                subprocess.run([npm, "run", command], cwd=frontend, env=env, check=True)

        scope = f"{BASE}{slug}/"
        build = frontend / "dist"
        for file in sorted(build.rglob("*")):
            if not file.is_file():
                continue
            target = output / slug / file.relative_to(build)
            target.parent.mkdir(parents=True, exist_ok=True)
            if file.suffix == ".html":
                html = file.read_text(encoding="utf-8")
                html = HTML_URL.sub(lambda m: f"{m[1]}{m[2]}{scope}{m[3]}{m[4]}", html)
                target.write_text(html, encoding="utf-8")
            elif file.suffix == ".css":
                css = file.read_text(encoding="utf-8")
                target.write_text(CSS_URL.sub(lambda m: m[1] + scope, css), encoding="utf-8")
            else:
                shutil.copyfile(file, target)
        if not (output / slug / "404.html").is_file():
            raise ValueError(f"{theme} is missing its customer 404 build")


def build_gallery(output):
    # The six themes build independently. Reuse the first theme's installed compiler
    # without including gallery routes in any theme build.
    frontend = ROOT / "Portfolio 1 - Teknologi" / "Frontend"
    dependencies = frontend / "node_modules"
    compiler = dependencies / "astro" / "bin" / "astro.mjs"
    if not compiler.is_file():
        raise RuntimeError("Install the Technology theme dependencies before building the gallery")
    config = Path(os.path.relpath(Path(__file__).with_name("astro.config.ts"), frontend))
    env = {**os.environ, "ASTRO_TELEMETRY_DISABLED": "1"}
    with TemporaryDirectory(prefix="tapid-gallery-", dir=dependencies) as temporary:
        out_dir = Path(temporary).relative_to(frontend)
        subprocess.run(
            ["node", str(compiler), "build", "--config", config.as_posix(), "--out-dir", out_dir.as_posix()],
            cwd=frontend,
            env=env,
            check=True,
        )
        shutil.copytree(temporary, output, dirs_exist_ok=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("output", type=Path)
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--installed", action="store_true", help="Reuse preinstalled npm dependencies")
    mode.add_argument("--prebuilt", action="store_true", help="Reuse theme outputs and build the gallery")
    args = parser.parse_args()
    output = args.output.resolve()
    output.mkdir(parents=True, exist_ok=True)
    if any(output.iterdir()):
        parser.error(f"Use an empty output directory: {output}")
    build_sites(output, not args.installed, args.prebuilt)
    build_gallery(output)
    check_links(output)
    print(f"Verified all links across {sum(1 for _ in output.rglob('*.html'))} HTML pages.")


if __name__ == "__main__":
    main()
