"""Build and verify the six public Astro demos for the GitHub Pages artifact."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import argparse
import json
import os
import re
import shutil
import subprocess


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
    for file in output.rglob("*.html"):
        page = Page(file.read_text(encoding="utf-8"))
        for address in page.links:
            url = urlsplit(address)
            if url.fragment and not url.path and not url.netloc and not url.scheme:
                if url.fragment not in page.ids:
                    raise ValueError(f"{file} has no target for {address}")
                continue
            if url.scheme or url.netloc:
                if not address.startswith(SITE):
                    continue
            pathname = unquote(url.path)
            if pathname.startswith(BASE):
                target = output / pathname.removeprefix(BASE)
            elif pathname.startswith("/"):
                raise ValueError(f"{file} references a path outside the site: {address}")
            elif pathname:
                target = file.parent / pathname
            else:
                continue
            if not target.is_file() and not (target / "index.html").is_file():
                raise ValueError(f"{file} references a missing path: {address}")


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


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("output", type=Path)
    parser.add_argument("--demo-archive", type=Path, required=True)
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--installed", action="store_true", help="Reuse preinstalled npm dependencies")
    mode.add_argument("--prebuilt", action="store_true", help="Package existing GitHub Pages builds")
    args = parser.parse_args()
    output = args.output.resolve()
    output.mkdir(parents=True)
    build_sites(output, not args.installed, args.prebuilt)
    for filename in ("index.html", "404.html", "demo-hover-topbar.html"):
        shutil.copyfile(Path(__file__).with_name(filename), output / filename)
    shutil.copytree(args.demo_archive, output / "demo-404")
    check_links(output)
    print(f"Verified all links across {sum(1 for _ in output.rglob('*.html'))} HTML pages.")


if __name__ == "__main__":
    main()
