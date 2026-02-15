<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<!-- credit to tailblocks for this component https://tailblocks.cc/ -->

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         <!-- TODO: could be an image of my face? -->
      <span class="ml-3 text-xl">Colin Reddig</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="/" class="mr-5 hover:text-gray-900">Home</a>
      <a href="/posts" class="mr-5 hover:text-gray-900">Posts</a>
      <a href="/projects" class="mr-5 hover:text-gray-900">Projects</a>
    </nav>
    <a href="mailto:hi@colinreddig.com">
      <button style="cursor: pointer;" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Email Me
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </a>
  </div>
</header>
{@render children()}
