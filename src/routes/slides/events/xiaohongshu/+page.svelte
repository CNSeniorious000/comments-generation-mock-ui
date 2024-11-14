<script lang="ts">
  import Comment from "../Comment.svelte";
  import Event from "../Event.svelte";
  import data from "./data.json";
  import src from "./input.png";
  import { sleep } from "$lib/utils/time";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

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

<Event bind:inputState bind:buttonState {zoom} moveLeft={38}>

  <svelte:fragment slot="left">
    <img class="m-auto max-h-full scale-95 rounded-md ring-(7 neutral-2/80)" in:fly={{ y: 5 }} {src} alt="xiaohongshu screenshot">
  </svelte:fragment>

  <svelte:fragment slot="right">
    {#each data.comments as { content, tags, comments }, i}
      {#await sleep(i ** 0.7 * 400) then}
        <Comment {content} {tags} {comments} />
      {/await}
    {/each}
  </svelte:fragment>

  <svelte:fragment slot="overlay">
    <div class="left-10vw size-40vmax bg-#FF2842/10 blur-90 transition-transform duration-900" class:translate-12vw={zoom} />
  </svelte:fragment>

</Event>

{#if zoom}
  <div class="fixed right-0 center h-full w-50%">
    <div in:fly={{ x: 15, duration: 900, delay: 500 }} out:fade={{ duration: 200 }} class="h-sm w-xl col gap-5 ws-nowrap">

      <div class="ml-1 translate-y-2 animate-fade-in text-xl text-black/5 font-900 tracking-3 uppercase">
        featuring
      </div>

      <div class="mb-2 row text-210 text-3xl tracking-wide">
        模拟社交媒体评论区
        <strong class="ml-0.5 font-500">真实舆论环境</strong>
      </div>

      {#await sleep(800) then}
        <div class="col gap-2" in:fly={{ x: 5, duration: 600 }}>
          <div class="row items-center gap-2 bg-gradient-(from-#FF2842 to-yellow to-rb) bg-clip-text text-lg text-transparent font-500">
            <div class="i-solar-people-nearby-line-duotone text-2xl text-#FF2842" />
            Agent-Based Modeling
          </div>
          <div class="text-xl">
            覆盖社交媒体<span class="text-red font-450">多种圈层、趣缘群体</span>，最大程度还原真实舆论环境
          </div>
        </div>
      {/await}

      {#await sleep(1000) then}
        <div class="col gap-2" in:fly={{ x: 5, duration: 600 }}>
          <div class="row items-center gap-2 bg-gradient-(from-#FF2842 to-yellow to-rb) bg-clip-text text-lg text-transparent font-500">
            <div class="i-solar-share-circle-bold-duotone text-2xl text-#FF2842" />
            多轮模拟交互
          </div>
          <div class="text-xl">
            有效预测可能争议的评论及<span class="text-red font-450">具体争议过程</span>
          </div>
        </div>
      {/await}

    </div>
  </div>
{/if}

<svelte:window on:keydown={({ key }) => key === " " && (zoom = !zoom)} />
