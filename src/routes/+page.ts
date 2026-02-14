// src/routes/+page.ts
import { getPosts } from '$lib/posts';

export async function load() {
  const posts = await getPosts();
  const home = await import(`./page.svx`);
  const content = home.default;

  return {
    posts, content
  };
}
