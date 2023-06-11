import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: 'https://blog.wooseop.kim',
  integrations: [
    mdx(),
    sitemap(),
    // once asset support is marked stable, consider migrating
    // https://docs.astro.build/en/guides/assets/#convert-from-astrojsimage
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  compressHTML: true,
});
