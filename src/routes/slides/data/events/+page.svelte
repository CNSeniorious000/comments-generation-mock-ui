<script>
  // @ts-nocheck
  import events from "../../../data/events.json";
  import icons from "../../../demo/emoji-carousel/icons.json";
  import Card from "$lib/components/Card.svelte";
  import Box from "$lib/components/lines/Box.svelte";
  import { choice } from "$lib/utils/random";

  let index = 0;

  $: event = events[index];
</script>

<div class="fixed inset-0 center">
  <Box t class="w-4xl flex flex-col text-zinc-7" opacity="0.1">
    <Box b class="flex flex-row items-center justify-between px-2.5 py-2 *:gap-2" opacity="0.1">
      <div class="text-xs">
        {event.description}
      </div>
      <div class="flex flex-row">
        {#each Array.from({ length: 3 }) as _}
          <div class="size-2.5 rounded-full bg-zinc-2/50"></div>
        {/each}
      </div>
    </Box>

    <main class="h-full flex flex-row">
      <Box l r opacity="0.1" class="h-full w-1/2 flex flex-col gap-2 p-2.5">
        <Box b class="w-1/2 row gap-0.2 py-1 text-xs -mt-2.5" opacity="0.1">
          <span class="text-zinc-3">https://</span>
          <span class="text-zinc-5">{new URL(event.source).hostname}</span>
          <span class="from-zinc-3 via-zinc-3 to-transparent bg-gradient-to-r bg-clip-text text-transparent">
            {new URL(event.source).pathname}
          </span>
        </Box>
        <div class="col -mt-1.8">
          {#each events as { description, comments, type, source }, i}
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <button class="row cursor-auto items-center gap-2 b-b-(1 zinc-1) px-2.5 py-1.5 text-xs -mx-2.5 hover:bg-zinc-1" on:mouseover={() => index = i}>
              <div>{type}</div>
              <div class:text-#ff0050={source.includes("douyin")} class:text-#ff9933={source.includes("weibo")}>{description}</div>
              <div class="shrink-0 grow-1 text-right text-zinc-9/8">评论 {comments.length}</div>
            </button>
          {/each}
        </div>
      </Box>

      <Box r class="w-1/2 flex flex-col items-stretch gap-6 p-8" opacity="0.1">
        {#each event.comments as { content, tags = [] } (content, tags)}
          <Card icon={choice(icons)} {content}>
            {#each tags as tag}
              <div class="bg-indigo-1 text-indigo-7">{tag}</div>
            {/each}
          </Card>
        {/each}
        {#if event.ending}
          <div class="b-t-(1 zinc-2) pt-6 text-sm text-zinc-4">{event.ending}</div>
        {/if}
      </Box>
    </main>
  </Box>
</div>
