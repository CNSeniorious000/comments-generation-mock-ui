<script>
  import avatar from "./jd.jpg";
  import Card from "$lib/components/Card.svelte";
  import Box from "$lib/components/lines/Box.svelte";
</script>

<Box t class="w-4xl flex flex-col text-zinc-7">
  <Box b class="flex flex-row justify-between p-2.5 *:gap-2" opacity="0.1">
    <div class="flex flex-row">
      {#each Array.from({ length: 4 }) as _}
        <div class="h-2.5 rounded bg-zinc-2/70" style:width="{30 + Math.random() * 20}pt" />
      {/each}
    </div>
    <div class="flex flex-row">
      {#each Array.from({ length: 1 }) as _}
        <div class="size-2.5 rounded-full bg-zinc-2/50" />
      {/each}
    </div>
  </Box>

  <main class="h-full flex flex-row">
    <Box l r opacity="0.1" class="h-full w-1/2 flex flex-col gap-2 p-2.5">
      <Box b class="w-fit py-1 text-xs -mt-2.5" opacity="0.15">
        <span class="text-zinc-3">https://</span>
        <span class="text-zinc-5">weibo.com</span>
        <span class="from-zinc-3 via-zinc-3 to-transparent bg-gradient-to-r bg-clip-text text-transparent">/jingdong/{String(Math.random()).slice(2)}</span>
      </Box>
      <div class="flex flex-row items-center gap-2">
        <img src={avatar} alt="avatar" class="size-9">
        <div class="flex flex-col">
          <div class="flex flex-row items-center gap-0.5 text-sm">
            京东
            <div class="i-fluent-emoji-crown -translate-y-1px" />
          </div>
          <div class="text-xs text-zinc-3 font-240">24-10-18 13:03 发布于 北京 来自 微博网页版</div>
        </div>
        <div class="i-mingcute-copy-2-line ml-auto mr-1.5 text-zinc-2" />
      </div>
      <div class="my-1 text-sm">
        近日，相关脱口秀演员参加京东 11.11 营销活动受到网友关注，若因此给您带来了不好的体验，我们深表歉意！后续我们没有和相关演员的合作计划，我们将进一步加大京东 11.11 补贴力度，回馈消费者对京东的关心和支持。
        <br />
        <br />
        京东大促营销组
        <br />
        2024年10月18日
      </div>
      <div class="mb-1 mt-10 flex flex-col gap-3 [&_div]:(h-3 rounded) [&>section]:(flex flex-col gap-1.5)">
        <section class="op-50">
          <div class="w-full bg-gradient-(from-zinc-2 via-zinc-2 to-transparent to-r)" />
          <div class="w-1/3 bg-gradient-(from-zinc-2 to-transparent to-r)" />
        </section>
      </div>

      <div class="flex flex-row -mx-2.5 -mb-2.5">
        <Box t class="flex flex-row gap-1.5 p-2.5">
          <div class="flex flex-row items-center gap-0.5 rounded bg-blue-5/90 p-1 pl-1.5 text-xs text-white">
            开始模拟
            <div class="i-healthicons-artificial-intelligence text-base" />
          </div>
          <div class="grid w-7 place-items-center rounded bg-zinc-2/80">
            <div class="i-solar-settings-linear text-zinc-5" />
          </div>
          <div class="w-14 rounded bg-zinc-2/35" />
        </Box>
      </div>
    </Box>
    <Box r class="w-1/2 flex flex-col items-stretch gap-4 p-4" opacity="0.05">
      <Card icon="bg-rose size-2 rounded-full translate-0.2pt" fixable content="受害者有罪论？你可以调侃自己但是不能调侃别人懂吗？">
        <div class="bg-red-1 text-red-7">愤怒</div>
      </Card>
      <Card icon="bg-pink size-2 rounded-full translate-0.2pt" fixable content="投诉谁不会呢？处理这种情况。就是需要智慧。感觉这种紧急处理就挺没智慧的。">
        <div class="bg-sky-1 text-sky-7">客观</div>
        <div class="bg-orange-1 text-orange-7">负面</div>
      </Card>
      <Card icon="bg-violet size-2 rounded-full translate-0.2pt" search="杨笠" content="杨笠只是说了你不愿意听的话而已">
        <div class="bg-violet-1 text-violet-7">实话</div>
      </Card>
      <Card icon="bg-orange size-2 rounded-full translate-0.2pt" content="如果不想要女性用户 为啥搞女神节 又当又立的东哥兄弟罢了" search="东哥兄弟论">
        <div class="bg-orange-1 text-orange-7">引战</div>
      </Card>
      <Card icon="bg-gray size-2 rounded-full translate-0.2pt" content="不论事情对错。代言人的选择本来就不应该选有争议的名人，店家是想开店迎天下客。有观点就会有争议">
        <div class="bg-gray-1 text-gray-7">理性</div>
      </Card>
    </Box>
  </main>
</Box>
