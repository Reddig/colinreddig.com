<script lang="ts">
	let { headerDesc, header, bodyText, image, imageAlt, link} = $props();
</script>

{#snippet imageSnippet()}
    <img class="h-40 rounded w-full object-cover object-center mb-6" src={image} alt={imageAlt}>
{/snippet}

<div class="xl:w-1/4 md:w-1/2 p-4">
    <div class="bg-gray-100 p-6 rounded-lg">
        {#if link}
            <a href={link}>
                {@render imageSnippet()}
            </a>
        {:else}
            {@render imageSnippet()}
        {/if}
        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{headerDesc}</h3>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
            {#if link}
                <a href={link}>{header}</a>
            {:else}
                 {header}
            {/if}
        </h2>
        <p class="leading-relaxed text-base">{@html bodyText}</p>
    </div>
</div>