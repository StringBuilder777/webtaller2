// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { SITE } from './src/data/site.js';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [sitemap()],
  fonts: [
    {
      // En Apple gana SF Pro del sistema; Inter es el respaldo para el resto
      // de plataformas, auto-hospedado para no depender de un CDN externo.
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.fontsource(),
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      display: 'swap',
    },
  ],
  image: {
    // Las fotos del taller son el contenido principal del sitio: se sirven
    // siempre como imágenes responsivas para no penalizar el móvil.
    layout: 'constrained',
    // Las fotos originales miden entre 1200 y 1600 px: con la escalera por
    // defecto salían trece variantes por foto. Cuatro escalones cubren de
    // móvil a retina sin llenar el build de archivos que nadie pide.
    breakpoints: [480, 768, 1080, 1600],
  },
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
