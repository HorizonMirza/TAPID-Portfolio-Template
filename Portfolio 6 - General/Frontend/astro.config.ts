import { defineConfig } from 'astro/config';
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { isAbsolute, relative, resolve, sep } from 'node:path';
import data from './src/portfolio.json' with { type: 'json' };

type ImageReference = { src?: unknown } | null | undefined;

const { profile, projects }: {
  profile?: { portrait?: ImageReference; [key: string]: unknown } | null;
  projects?: Array<{ image?: ImageReference; [key: string]: unknown } | null> | null;
} = data;

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  integrations: [{
    name: 'tapid-validate-media',
    hooks: {
      'astro:config:done': ({ config }) => {
        const publicDirectory = fileURLToPath(config.publicDir);
        const images: { field: string; image: ImageReference }[] = [
          { field: 'profile.portrait', image: profile?.portrait },
          ...(Array.isArray(projects)
            ? projects.map((project, index) => ({ field: `projects[${index}].image`, image: project?.image }))
            : []),
        ];
        for (const { field, image } of images) {
          const source = image?.src;
          if (typeof source !== 'string' || !source.startsWith('/')) continue;
          const pathname = decodeURIComponent(source.slice(1));
          const target = resolve(publicDirectory, pathname);
          const relativePath = relative(publicDirectory, target);
          if (isAbsolute(relativePath) || relativePath === '..' || relativePath.startsWith('..' + sep)
            || !statSync(target, { throwIfNoEntry: false })?.isFile()) {
            throw new Error(`Missing or invalid public image for ${field}: ${source}`);
          }
        }
      },
    },
  }],
});
