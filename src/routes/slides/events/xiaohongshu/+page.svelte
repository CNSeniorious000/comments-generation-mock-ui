<script lang="ts">
  import Comment from "../Comment.svelte";
  import Event from "../Event.svelte";
  import data from "./data.json";
  import src from "./input.png";
  import { sleep } from "$lib/utils/time";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let inputState: "empty" | "over" | "dropped";
  let buttonState: "before" | "ready" | "loading" | "done";
  let zoom = false;

  onMount(async () => {
    await sleep(400);
    inputState = "dropped";
    await sleep(400);
    buttonState = "loading";
    await sleep(580);
    zoom = true;
  });
</script>

<Event bind:inputState bind:buttonState {zoom}>

  <svelte:fragment slot="left">
    <img class="m-auto max-h-full scale-95 rounded-md ring-(7 neutral-2/80)" in:fly={{ y: 5 }} {src} alt="xiaohongshu screenshot">
  </svelte:fragment>

  <svelte:fragment slot="right">
    {#each data.comments as { content, tags }, i}
      {#await sleep(i ** 0.7 * 400) then}
        <Comment {content} {tags} />
      {/await}
    {/each}
  </svelte:fragment>

  <svelte:fragment slot="overlay">
    <div class="left-10vw size-40vmax bg-#FF2842/10 blur-90 transition-transform duration-900" class:translate-x-30vw={zoom} />
  </svelte:fragment>

</Event>
