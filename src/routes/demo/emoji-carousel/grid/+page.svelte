<script lang="ts">
  import icons from "../icons.json";
  import Emoji from "$lib/components/Emoji.svelte";
  import { choice } from "$lib/utils/random";
  import { onMount } from "svelte";

  const w = 17;
  const h = 7;

  const grid: string[][] = Array.from({ length: w }).map(() => Array.from({ length: h }));
  const isAnimating = Array.from({ length: w }).map(() => Array.from({ length: h }).map(() => false));

  const interval = 700;

  function shuffleOnce() {
    let x = Math.floor(Math.random() * w);
    let y = Math.floor(Math.random() * h);
    if (isAnimating[x][y]) {
      x = Math.floor(Math.random() * w);
      y = Math.floor(Math.random() * h);
    }

    isAnimating[x][y] = true;
    grid[x][y] = choice(icons, grid[x][y]);
    setTimeout(shuffleOnce, interval + Math.random() * interval);
    setTimeout(() => (isAnimating[x][y] = false), interval);
  }

  function start(count: number) {
    if (count) {
      shuffleOnce();
      setTimeout(() => start(count - 1), interval / count);
    }
  }

  onMount(() => {
    start(27);
  });
</script>

<div class="contents text-2xl">
  <div class="flex flex-col gap-0.6">
    {#each Array.from({ length: h }) as _, y}
      <div class="flex flex-row gap-0.6">
        {#each Array.from({ length: w }) as _, x}
          <div class="size-10">
            <Emoji emoji={grid[x][y]} />
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>
