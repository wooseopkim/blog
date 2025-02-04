import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: 'https://blog.wooseop.kim',
  integrations: [mdx(), sitemap()],
  compressHTML: true,
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  markdown: {
    rehypePlugins: [rehypeHeadingIds, rehypeAutolinkHeadings],
  },
});
