import { defineConfig } from 'astro/config';
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { isAbsolute, relative, resolve, sep } from 'node:path';
import data from './src/portfolio.json' with { type: 'json' };

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  integrations: [{
    name: 'tapid-validate-media',
    hooks: {
      'astro:config:done': ({ config }) => {
        const publicDirectory = fileURLToPath(config.publicDir);
        const images = [
          ['profile.portrait', data.profile?.portrait],
          ...(Array.isArray(data.projects)
            ? data.projects.map((project, index) => [`projects[${index}].image`, project?.image])
            : []),
        ];
        for (const [field, image] of images) {
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
