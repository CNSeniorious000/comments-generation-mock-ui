<script>
  import Card from "$lib/components/Card.svelte";
  import Box from "$lib/components/lines/Box.svelte";
</script>

<Box l r t>
  <Box b class="ml-1/2 flex flex-row justify-end gap-1.5 p-2" opacity="0.1">
    <div class="size-2 rounded-full bg-zinc-2" />
    <div class="size-2 rounded-full bg-zinc-2" />
    <div class="size-2 rounded-full bg-zinc-4" />
  </Box>

  <div class="absolute left-4 top-3 text-xs text-zinc-5 tracking-wide">评论演练场</div>

  <div class="flex flex-col gap-5 p-5 pb-25 -mb-40">
    <Card buttons icon="bg-orange size-2 rounded-full translate-0.2pt" search="百度副总裁" content="运营自己的账号确实没问题，但是没必要用公司身份做认证吧，你所说的第一句话都代表公司的言论，带货谁都可以带，还非得认证成百度副总裁？">
      <div class="bg-orange-1 text-orange-8">负面</div>
    </Card>
    <Card buttons icon="bg-blue size-2 rounded-full translate-0.2pt" content="不好好做百度百科，就想搞流量。互联网悲哀">
      <div class="bg-blue-1 text-blue-8">悲伤</div>
    </Card>
    <Card buttons icon="bg-pink size-2 rounded-full translate-0.2pt" search="狼性文化" content="自身能力不够所以施压员工，以此展现“铁腕女强人”的狼性文化样子。想得倒挺美。">
      <div class="bg-red-1 text-red-8">人身攻击</div>
    </Card>
  </div>
</Box>
