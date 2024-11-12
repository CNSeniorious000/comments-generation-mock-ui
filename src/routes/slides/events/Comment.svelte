<script lang="ts">
  import avatars from "../../data/assets/avatars";
  import { choice } from "$lib/utils/random";

  export let content: string;
  export let tags: string[] = [];
  export let comments: { content: string; tags?: string[] }[] = [];
</script>

<div class="col">
  <div class="row gap-1.5 text-xs">

    <img class="size-5 rounded-full" src={choice(avatars)} alt="avatar">

    <div class="col gap-0.7 -translate-y-0.5">
      <h3 class="text-neutral-4 font-mono">
        user-{Math.random().toString().slice(2, 9)}
      </h3>
      <div class="text-3.1 text-neutral-8 leading-snug">
        {content}
      </div>
      {#if tags.length}
        <div class="5 mt-0.2 row gap-1">
          {#each tags as tag}
            <div class="w-fit rounded bg-indigo/10 px-1.3 py-0.5 text-xs text-indigo">{tag}</div>
          {/each}
        </div>
      {/if}
      {#if comments.length}
        <div class="mt-1.8 col gap-1">
          {#each comments as { content, tags }}
            <svelte:self {content} {tags} />
          {/each}
        </div>
      {/if}
    </div>

  </div>
</div>
