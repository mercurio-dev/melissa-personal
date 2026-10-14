import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://melissa-personal.netlify.app',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'preserve' },
  compressHTML: true,
});
