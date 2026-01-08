// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://praesio.com', // Remplacer par votre URL réelle
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://praesio.com/',
        'https://praesio.com/contact',
        'https://praesio.com/mentions-legales',
        'https://praesio.com/politique-confidentialite',
      ]
    })
  ]
});
