<script>
    export let data;
    // Do things with data.posts such as sorting, filtering, etc.
</script>

<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    {#each data.posts as post}
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap bg-indigo-100 rounded-lg p-8 hover:bg-indigo-200 transition-colors duration-300">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">{post.metadata.category}</span>
          <span class="mt-1 text-gray-500 text-sm">{post.metadata.date}</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{post.metadata.title}</h2>
          <p class="leading-relaxed">{post.metadata.description}</p>
          <a href={post.path} class="text-indigo-500 inline-flex items-center mt-4">Read More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    {/each}
  </div>
</section>