<script lang="ts">
  import "$lib/utils/md.css";

  import article from "./article.md?raw";
  import Markdown from "$lib/utils/Markdown.svelte";

  let state: "empty" | "over" | "dropped" = "empty";
</script>

<div class="h-full overflow-y-scroll p-5" role="article" on:drop|preventDefault={() => state = "dropped"} on:dragover|preventDefault={() => state = "over"}>
  {#if state === "over"}
    <div class="center h-full w-full text-neutral-4">
      将帖子拖到这里
    </div>

  {:else if state === "dropped"}
    <Markdown text={article} />
  {/if}
</div>
