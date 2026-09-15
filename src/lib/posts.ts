export async function getPosts() {
  const posts = import.meta.glob('/src/routes/post/*.svx');

  var promises = await Promise.all(
    Object.entries(posts).map(async ([path, resolver]) => {
      const slug = path.split('/').pop()!.split('.')[0];
      const post = (await resolver());
      return {
        metadata: post.metadata,
        path: `/post/${slug}`
      };
    })
  );

  promises = promises.sort(function(a, b) {
    return (a.metadata.date > b.metadata.date) ? -1 : ((a.metadata.date < b.metadata.date) ? 1 : 0);
});
  return promises
}
