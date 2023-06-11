// @ts-check

import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getPosts } from '../lib/posts';

/**
 * @param {import('astro').APIContext} context
 */
export async function get(context) {
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
  });
}
