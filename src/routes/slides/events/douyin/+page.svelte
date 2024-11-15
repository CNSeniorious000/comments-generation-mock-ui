<script lang="ts">
  import Comment from "../Comment.svelte";
  import Event from "../Event.svelte";
  import data from "./data.json";
  import src from "./input.mp4";
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

  <Event bind:inputState bind:buttonState {zoom} moveLeft={40}>

    <svelte:fragment slot="left">
      <div in:fly={{ y: 5 }} class="relative m-auto aspect-3/5 h-full scale-96.5 overflow-hidden rounded-md ring-(7 neutral-2/80)">
        <video class="-mt-5" {src} autoplay muted>
          <track kind="captions">
        </video>
      </div>
    </svelte:fragment>

    <svelte:fragment slot="right">
      {#each data.comments as { content, tags }, i}
        {#await sleep(i ** 0.7 * 400) then}
          <Comment {content} {tags} />
        {/await}
      {/each}
    </svelte:fragment>

    <svelte:fragment slot="overlay">
      <div class="left-10vw size-40vmax bg-#FE2C55/10 blur-90 transition-transform duration-900" class:translate-x-30vw={zoom} />
      <div class="bottom-10vh right-10vw size-40vmax bg-#25F4EE/7 blur-60" />
    </svelte:fragment>

  </Event>

  {#if zoom}
    <div class="fixed right-0 center h-full w-52%">
      <div in:fly={{ x: 15, duration: 900, delay: 500 }} out:fade={{ duration: 200 }} class="h-sm w-xl col gap-3 ws-nowrap">

        <div class="ml-1 translate-y-2 animate-fade-in text-xl text-black/5 font-900 tracking-3 uppercase">
          featuring
        </div>

        <div class="mb-4 mt-2 row text-210 text-3xl tracking-wide">
          <strong class="ml-0.5 font-500">针对性</strong>
          评论回复生成
        </div>

        {#await sleep(600) then}
          <div class="col gap-2" in:fly={{ x: 5, duration: 600 }}>
            <div class="box-border text-xl">
              涵盖<span>复杂</span>评论情境，适应<span>多变</span>的舆情环境
            </div>
            <div class="row translate-y-0.5 gap-2">
              {#each ["娱乐新闻", "品牌公关活动", "社会事件"] as type, i}
                {#await sleep(i * 100 + 100) then}
                  <div in:fly|global={{ x: 5 }} class="row items-center gap-1 rounded bg-#FE2C55/7 py-1 pl-2.2 pr-2 text-#FE2C55">
                    <div class="i-lucide-check-check" />
                    <div>{type}</div>
                  </div>
                {/await}
              {/each}
              <div in:fly|global={{ x: 5, delay: 400 }} class="w-15 row items-center rounded bg-gradient-(from-#FE2C55/7 to-transparent to-r) pl-2.2 text-#FE2C55">
                <div class="i-lucide-check-check op-40" />
              </div>
            </div>
          </div>
        {/await}

        {#await sleep(900) then}
          <div class="col gap-2" in:fly={{ x: 5 }}>
            <div class="col gap-1 text-xl">
              <div>根据不同的评论环境，</div>
              <div in:fly={{ x: 5, delay: 100 }}>生成<span>理性</span> / <span>协商性</span> / <span>可对话性</span> / <span>幽默感</span></div>
              <div in:fly={{ x: 5, delay: 200 }}>等多种类型的高质量回复</div>
            </div>
          </div>
        {/await}

      </div>
    </div>
  {/if}
{/await}

<svelte:window on:keydown={({ key }) => key === " " && (zoom = !zoom)} />

<style>
  span {
    --uno: relative inline-block before:(absolute bottom-0.5 left-0 right-0 h-1/4 animate-fade-in rounded-sm bg-#25F4EE/50 content-empty -z-1);
  }
</style>
