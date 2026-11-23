import { fileURLToPath } from 'node:url';

export default {
  srcDir: fileURLToPath(new URL('./src/', import.meta.url)),
  publicDir: fileURLToPath(new URL('./public/', import.meta.url)),
  build: { format: 'file' },
};
