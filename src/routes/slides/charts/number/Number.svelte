<script lang="ts">
  import { fly } from "svelte/transition";

  export let number: number;
  let show = false;

  $: if (number) {
    show = true;
    setTimeout(() => {
      show = false;
    }, 400);
  }
</script>

<div class="relative w-5em text-7xl tracking-tighter font-mono transition-opacity [&>*]:(absolute right-0)" class:op-0={!number}>
  {#if number && show}
    <div transition:fly={{ y: 10 }} class="i-fluent-arrow-trending-sparkle-20-filled translate-x-0.3em text-1.5em text-#914dd2 op-50 -translate-y-0.5em"></div>
    <div class="size-2em bg-gradient-(from-white via-white/20 to-transparent to-t) -translate-y-0.6em"></div>
  {/if}
  <div class="text-#2a57ff">{number}</div>
  <div class="h-1em w-full bg-gradient-(from-white/50 to-transparent to-t)"></div>
</div>
