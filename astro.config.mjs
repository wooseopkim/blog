import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: 'https://blog.wooseop.kim',
  integrations: [
    mdx(),
    sitemap(),
  ],
  compressHTML: true,
});
