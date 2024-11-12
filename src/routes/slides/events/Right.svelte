<script>
  import Comment from "./Comment.svelte";
  import frame from "./iPhone.png";
</script>

<img class="pointer-events-none absolute h-full -mx-100" src={frame} alt="iphone frame">

<div class="relative h-146 w-69 col overflow-y-hidden rounded-9 shadow-(black/20 xl)">
  <div class="h-9.25 row shrink-0 items-center justify-between">
    <div class="ml-9 text-3.3 text-neutral-7 font-500">09:41</div>
    <div class="mr-7 row gap-1.3 *:bg-neutral-2/70">
      <div class="size-3 rounded-full" />
      <div class="size-3 rounded-full" />
      <div class="h-3 w-4.5 rounded" />
    </div>
  </div>

  <div class="h-full col grow gap-1">
    <h2 class="text-center text-sm text-neutral-6">评论</h2>
    <div class="mx-3.5 h-full col gap-4 overflow-y-scroll pb-2">
      <Comment content="随时随地发现新鲜事！微博带你欣赏世界上每一个精彩瞬间，了解每一个幕后故事。分享你想表达的，让全世界都能听到你的心声！" />
      <Comment content="在微博，随时随地，发现新鲜事；" tags={["礼貌", "开心"]} />
      <Comment content="在微博，时政要闻、文娱热点、热门事件一手掌握；" />
      <Comment content="在微博，海量视频，等你来刷；专业达人、游戏动漫、美食时尚、情感搞笑、娱乐综艺、影视、体育、VLOG、知识应有尽有；" comments={[{ content: "不忘初心，助力公益。以微博之力，让世界更美。", tags: ["这是一个回复"] }]} />
      <Comment content="呈现新鲜、热门、有料的热点，想知道正在发生什么，狂戳微博热搜榜" tags={["新鲜", "热门", "有料"]} />
    </div>
  </div>

  <div class="mx-auto mb-2.5 h-1 w-2/5 rounded-full bg-black" />
</div>
