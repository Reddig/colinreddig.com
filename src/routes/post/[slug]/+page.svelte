<!-- src/routes/post/[slug]/+page.svelte -->
<script>
  export let data;
  // You can do things with data.metadata here
</script>

<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">{data.metadata.category}</span>
          <span class="mt-1 text-gray-500 text-sm">{data.metadata.date}</span>
        </div>
        <div class="md:flex-grow">
          <article class="leading-relaxed prose prose-base dark:prose-invert prose-h1:font-bold prose-h1:text-xxl prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl prose-headings:bold bg-white border-solid border border-gray-300 rounded-lg p-8">
            <svelte:component this={data.content} />
          </article>
        </div>
      </div>
    </div>
  </div>
</section>