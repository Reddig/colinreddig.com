<!-- src/routes/+page.svelte -->
<script>
    export let data;
    import banner from '$lib/assets/banner.jpg';
    import head from '$lib/assets/head.jpg';
    // Do things with data.posts such as sorting, filtering, etc.
</script>


<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="Colin and Greta in front of a cloud-shrouded volcano in Costa Rica" class="object-cover object-center h-full w-full" src={banner}>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img alt="A picture of Colin with a cheesehead on, preparing to watch his beloved Packers lose once again in the playoffs" class="rounded-full" src={head}>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Colin Reddig</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base">I enjoy frisbee, concerts, and food! I am trying to travel more :)</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">I set up this website as a way to learn a little bit about modern front-end development with Svelte and Tailwind CSS. I quickly discovered I had a poor eye for design and found templates online that look pretty. I hope to be adding more posts here soon! Thank you for visiting!</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>