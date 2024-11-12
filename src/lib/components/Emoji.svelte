<script>
  import { browser } from "$app/environment";
  import { blur, scale } from "svelte/transition";

  export let emoji = "";
  export let start = 0.65;
  export let delay = 100;
  export let amount = 1;
</script>

<div class="relative aspect-1 *:absolute">
  {#if emoji && browser}
    {#key emoji}
      <div in:blur={{ delay, opacity: 1, amount }} out:blur={{ opacity: 1, amount }}>
        <div in:scale={{ delay, start }} out:scale={{ start }} class={emoji} />
      </div>
    {/key}
  {/if}
</div>
