<script lang="ts">
  import article from "./article.md?raw";
  import Markdown from "$lib/utils/Markdown.svelte";

  export let state: "empty" | "over" | "dropped" = "empty";
  export let zoom = false;
</script>

<div class="h-full overflow-y-scroll p-5 transition-all duration-700" class:op-20={zoom} role="article" on:drop|preventDefault={() => state = "dropped"} on:dragover|preventDefault={() => state = "over"}>
  {#if state !== "dropped"}
    <div class="center h-full w-full text-neutral-4">
      {state === "over" ? "在这里放下帖子" : "将帖子拖到这里"}
    </div>
  {:else}
    <slot>
      <Markdown text={article} />
    </slot>
  {/if}
</div>
