import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: 'https://blog.wooseop.kim',
  integrations: [mdx(), sitemap()],
  compressHTML: true,
});
