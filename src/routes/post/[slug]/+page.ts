// src/routes/post/[slug]/+page.ts
export async function load({ params }) {
  const post = await import(`../${params.slug}.svx`);
  const metadata = post.metadata;

  const content = post.default;

  return {
    content,
    metadata
  };
}