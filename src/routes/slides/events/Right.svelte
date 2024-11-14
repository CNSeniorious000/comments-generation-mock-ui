<script lang="ts">
  import Comment from "./Comment.svelte";
  import frame from "./iPhone.png";
  import { sleep } from "$lib/utils/time";
  import { fade, fly } from "svelte/transition";
</script>

<img in:fly|global={{ x: "40vw", opacity: 1, duration: 1000 }} class="pointer-events-none absolute h-full min-w-fit select-none" src={frame} alt="iphone frame">

<div in:fly|global={{ x: "40vw", opacity: 1, duration: 1000 }} class="relative h-144.8 w-69 col overflow-y-hidden rounded-9 shadow-(black/20 xl)">
  <div class="h-7.7 row shrink-0 items-center justify-between">
    <div class="ml-9 translate-y-0.2 text-3.3 text-neutral-7 font-500">09:41</div>
    <div class="mr-7 row gap-1.3 *:bg-neutral-2/70">
      <div class="size-3 rounded-full" />
      <div class="size-3 rounded-full" />
      <div class="h-3 w-4.5 rounded" />
    </div>
  </div>

  <div class="h-full col gap-1">
    <h2 class="text-center text-sm text-neutral-6">评论</h2>
    <div class="relative mx-3.5 h-full col gap-4 overflow-y-scroll pb-13">
      {#await sleep(1100)}
        <div class="absolute inset-0 center">
          <div out:fade class="i-svg-spinners-90-ring-with-bg op-50" />
        </div>
      {:then}
        <slot>
          {#await sleep(100) then}
            <Comment content="随时随地发现新鲜事！微博带你欣赏世界上每一个精彩瞬间，了解每一个幕后故事。分享你想表达的，让全世界都能听到你的心声！" />
          {/await}
          {#await sleep(600) then}
            <Comment content="在微博，随时随地，发现新鲜事；" tags={["礼貌", "开心"]} />
          {/await}
          {#await sleep(900) then}
            <Comment content="在微博，时政要闻、文娱热点、热门事件一手掌握；" />
          {/await}
          {#await sleep(1200) then}
            <Comment content="在微博，海量视频，等你来刷；专业达人、游戏动漫、美食时尚、情感搞笑、娱乐综艺、影视、体育、VLOG、知识应有尽有；" comments={[{ content: "不忘初心，助力公益。以微博之力，让世界更美。", tags: ["这是一个回复"] }]} />
          {/await}
          {#await sleep(1600) then}
            <Comment content="呈现新鲜、热门、有料的热点，想知道正在发生什么，狂戳微博热搜榜" tags={["新鲜", "热门", "有料"]} />
          {/await}
        </slot>
      {/await}
    </div>
  </div>

  <div class="absolute bottom-0 left-3.2 h-10 w-[calc(100%-2rem)] bg-gradient-(from-white/80 to-transparent to-t)" />
  <div class="absolute bottom-0 left-1/2 mb-2.2 h-1 w-2/5 shrink-0 rounded-full bg-black -translate-x-1/2" />
</div>
