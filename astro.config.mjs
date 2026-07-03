import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://raumfuerdich-impulse.de',
  integrations: [sitemap()],
  output: 'static',
});
