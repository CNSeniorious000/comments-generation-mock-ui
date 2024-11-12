<script>
  import { onMount, tick } from "svelte";
  import { blur, scale } from "svelte/transition";

  export let emoji = "";
  export let start = 0.65;
  export let delay = 100;
  export let amount = 1;

  let first = true;
  let show = false;

  onMount(async () => {
    show = true;
    await tick();
    first = false;
  });
</script>

<div class="relative aspect-1 [&>*]:(absolute left-1/2 top-1/2 -translate-1/2)">
  {#if emoji && show}
    {#key emoji}
      <div in:blur|global={{ delay: first ? 0 : delay, opacity: 1, amount }} out:blur={{ opacity: 1, amount }}>
        <div in:scale|global={{ delay: first ? 0 : delay, start }} out:scale={{ start }} class={emoji} />
      </div>
    {/key}
  {/if}
</div>
