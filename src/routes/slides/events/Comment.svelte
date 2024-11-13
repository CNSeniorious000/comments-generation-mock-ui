<script lang="ts">
  import avatars from "../../data/assets/avatars";
  import { choice } from "$lib/utils/random";
  import { blur, fly, scale } from "svelte/transition";

  export let content: string;
  export let tags: string[] = [];
  export let comments: { content: string; tags?: string[] }[] = [];
</script>

<div class="col">
  <div class="row gap-1.5 text-xs">

    <div in:blur={{ opacity: 1, amount: 1 }} class="size-5 shrink-0">
      <img in:scale|global={{ start: 0.8 }} class="size-full rounded-full" src={choice(avatars)} alt="avatar">
    </div>

    <div class="col gap-0.7 -translate-y-0.5">
      <h3 in:fly|global={{ y: 3 }} class="text-neutral-4 font-mono">
        user-{Math.random().toString().slice(2, 9)}
      </h3>
      <div in:fly|global={{ y: 3, delay: 150 }} class="text-3.1 text-neutral-8 leading-snug">
        {content}
      </div>
      {#if tags.length}
        <div class="relative mt-0.2 row gap-1.5">
          {#each tags as tag, i}
            <div in:fly|global={{ y: 3, delay: i ** 0.5 * 100 + 350 }} class="w-fit rounded bg-indigo/10 px-1.3 py-0.5 text-xs text-indigo">{tag}</div>
          {/each}
        </div>
      {/if}
      {#if comments.length}
        <div in:fly|global={{ y: 3, delay: 300 }} class="mt-1.8 col gap-1">
          {#each comments as { content, tags }}
            <svelte:self {content} {tags} />
          {/each}
        </div>
      {/if}
    </div>

  </div>
</div>
