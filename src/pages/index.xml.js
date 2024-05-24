// @ts-check

import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getPosts } from '../lib/posts';

/**
 * @param {import('astro').APIContext} context
 */
export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site?.toString() ?? '',
    items: posts.map((post) => ({
      ...post.data,
      pubDate: post.data.date,
      link: post.$link,
    })),
    trailingSlash: false,
  });
}
