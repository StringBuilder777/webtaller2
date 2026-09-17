// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { SITE } from './src/data/site.js';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [sitemap()],
  image: {
    // Las fotos del taller son el contenido principal del sitio: se sirven
    // siempre como imágenes responsivas para no penalizar el móvil.
    layout: 'constrained',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
