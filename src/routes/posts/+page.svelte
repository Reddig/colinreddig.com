<script>
    export let data;
    // Do things with data.posts such as sorting, filtering, etc.
</script>

<div class="grid grid-cols-4 gap-4 row-start-2 row-end-3">
    <div class="flex flex-col items-center shadow-md col-start-2 col-end-4 ">
        {#each data.posts as post}
        <div>
            <a href={post.path} class="text-xl font-bold">{post.metadata.title}</a>
        </div>
        <div>
            <p class="text-gray-600 text-sm">Published {post.metadata.date}</p>
        </div>
        <div>
            <p>{post.metadata.description}</p>
        </div>
        {/each}
    </div>
</div>