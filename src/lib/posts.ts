import { CollectionEntry, getCollection } from 'astro:content';

type RawPost = CollectionEntry<typeof collection>;

export type Post = RawPost & {
  $link: string;
};

const collection = 'posts';

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection(collection);
  return posts.sort(latest).map(withLink);
}

function latest(a: RawPost, b: RawPost) {
  return b.data.date.valueOf() - a.data.date.valueOf();
}

function withLink(x: RawPost): Post {
  if ('$link' in x) {
    throw new Error('$link property is already defined');
  }
  return {
    ...x,
    $link: `/posts/${x.slug}`,
  };
}
