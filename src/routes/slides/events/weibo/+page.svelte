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
    await sleep(1400);
    inputState = "dropped";
    await sleep(400);
    buttonState = "loading";
  });
</script>

{#await sleep(1000) then}
  <Event bind:inputState bind:buttonState {zoom} moveLeft={20}>

    <svelte:fragment slot="left">
      <img in:fly={{ y: 5 }} {src} alt="weibo screenshot">
    </svelte:fragment>

    <svelte:fragment slot="right">
      {#each data.comments as { content, tags }, i}
        {#await sleep(i ** 0.7 * 400) then}
          <Comment {content} {tags} />
        {/await}
      {/each}
    </svelte:fragment>

    <svelte:fragment slot="overlay">
      <div class="left-10vw size-40vmax bg-#ff9933/10 blur-90 transition-transform duration-900" class:translate-x-30vw={zoom} />
      <div class="bottom-10vh right-10vw size-40vmax bg-#E6162D/5 blur-60" />
    </svelte:fragment>

  </Event>

  {#if zoom}
    <div class="fixed bottom-0 left-0 top-30 center w-40%">
      <div in:fly={{ x: -15, duration: 900, delay: 500 }} out:fade class="h-sm w-xl col items-end gap-5 ws-nowrap">

        <div class="translate-y-2 animate-fade-in text-xl text-black/5 font-900 tracking-3 uppercase -mr-2.1">
          featuring
        </div>

        <div class="mb-2 row text-210 text-3xl tracking-wide">
          <strong class="ml-0.5 font-500">网络语义</strong>
          情感分析
        </div>

        {#await sleep(550) then}
          <div class="col items-end gap-2" in:fly={{ x: -5, duration: 600 }}>
            <div class="w-fit row items-center gap-1 rounded bg-#E6162D/5 px-2 py-1 text-lg text-#E6162D/80 font-500">
              字面意义
              <div class="i-fluent-color-dismiss-circle-20 rotate-45 text-xl" />
              隐含的语境信息
            </div>
            <div class="text-xl">
              助力企业准确把握舆论<span class="text-#E6162D font-450">真实风向</span>
            </div>
          </div>
        {/await}

        {#await sleep(700) then}
          <div class="col items-end gap-2" in:fly={{ x: -5, duration: 600 }}>
            <div class="w-fit row items-center gap-1 rounded bg-#ff9933/9 px-2 py-1 text-lg text-#ff9933/90 font-500">
              实时迭代
              <div class="i-fluent-color-coin-multiple-20 text-xl -translate-y-0.3" />
              网络流行语语料库
            </div>
            <div class="col items-end gap-1 text-xl">
              <div>
                <span class="text-#ff9933 font-450">热梗</span>更新换代
              </div>
              <div>
                增强模型对<span class="text-#ff9933 font-450">互联网文本</span>语义的理解
              </div>
            </div>
          </div>
        {/await}

      </div>
    </div>
  {/if}

{/await}

<svelte:window on:keydown={({ key }) => key === " " && (zoom = !zoom)} />
