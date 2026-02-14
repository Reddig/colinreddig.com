<!-- src/routes/post/[slug]/+page.svelte -->
<script>
  export let data;
  // You can do things with data.metadata here
</script>

<article class="p-8 prose dark:prose-invert
  prose-h1:font-bold prose-h1:text-xl
  prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl
  prose-headings:underline">
    <svelte:component this={data.content} />
</article>