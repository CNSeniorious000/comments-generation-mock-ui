<script>
  import Card from "$lib/components/Card.svelte";
  import Box from "$lib/components/lines/Box.svelte";
</script>

<Box l r t b class="h-xl w-4xl flex flex-col text-zinc-7">
  <Box b class="flex flex-row justify-between p-2.5 *:gap-2" opacity="0.1">
    <div class="flex flex-row">
      {#each Array.from({ length: 4 }) as _}
        <div class="h-2.5 rounded bg-zinc-2/70" style:width="{30 + Math.random() * 20}pt" />
      {/each}
    </div>
    <div class="flex flex-row">
      {#each Array.from({ length: 1 }) as _}
        <div class="size-2.5 rounded-full bg-zinc-2/70" />
      {/each}
    </div>
  </Box>

  <main class="h-full flex flex-row">
    <Box r opacity="0.1" class="h-full w-1/2 flex flex-col gap-2 p-2.5">
      <div class="relative grid h-xs w-full place-items-center rounded bg-gradient-(from-zinc-2/40 via-zinc-2/50 to-zinc-2 to-b)">
        <div class="i-material-symbols-play-circle-rounded text-3xl text-zinc-4/70" />
        <div class="absolute bottom-2.5 left-2.5 w-full flex flex-col gap-1">
          <div class="flex flex-row items-center gap-1 text-xs text-white">
            @
            <div class="h-2.5 w-20 translate-y-0.2 rounded bg-white/50" />
          </div>
          <div class="h-5 w-1/2 rounded bg-gradient-(from-white/50 via-white/45 to-white/30 to-r)" />
        </div>
      </div>

      <div class="mt-2 flex flex-col gap-3 [&_div]:(h-2.5 rounded) [&>section]:(flex flex-col gap-1.5) [&_div]:bg-gradient-(from-zinc-2 via-zinc-2 to-zinc-2/70 to-r)">
        <section>
          <div class="w-full" />
          <div class="w-full" />
          <div class="w-1/3" />
        </section>

        <section class="op-50">
          <div class="w-full" />
          <div class="w-full" />
          <div class="w-full" />
          <div class="w-1/4" />
        </section>
      </div>

      <div class="flex grow flex-row justify-end -mx-2.5 -mb-2.5">
        <Box t class="flex flex-row self-end gap-1.5 p-2.5">
          <div class="w-14 rounded bg-zinc-2/35" />
          <div class="grid w-7 place-items-center rounded bg-zinc-2/80">
            <div class="i-solar-settings-linear text-zinc-5" />
          </div>
          <div class="flex flex-row items-center gap-0.5 rounded bg-blue-5/90 p-1 pl-1.5 text-xs text-white">
            开始模拟
            <div class="i-healthicons-artificial-intelligence text-base" />
          </div>
        </Box>
      </div>
    </Box>
    <Box class="w-1/2 flex flex-col items-stretch gap-4 p-4 *:rounded">
      <Card fixable icon="i-fluent-emoji-rolling-on-the-floor-laughing" content="典中典" search="典">
        <div class="bg-orange-1 text-orange-8">讽刺</div>
        <div class="bg-red-1 text-red-8">恶评</div>
      </Card>
      <Card fixable icon="i-fluent-emoji-anxious-face-with-sweat" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quo fugit facilis nesciunt quis et modi, pariatur voluptate nulla sit recusandae? A doloribus rem delectus esse perferendis necessitatibus, molestiae ut.">
        <div class="bg-pink-1 text-pink-8">负面</div>
      </Card>
      <Card icon="i-fluent-emoji-hugging-face" content="占个位 晚点改👍Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, tempore, molestiae nemo architecto ab magnam hic officia libero veniam expedita, blanditiis quis perferendis dolore quos perspiciatis facere! Minima, atque. Laudantium.">
        <div class="bg-green-1 text-green-8">正面</div>
      </Card>
    </Box>
  </main>
</Box>
