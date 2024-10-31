<script>
  import "@unocss/reset/tailwind.css";
  import "uno.css";

  import { onMount } from "svelte";

  onMount(() => import("misans-vf/lib/MiSans.min.css"));
</script>

<svelte:head>
  <link rel="icon" href="https://api.iconify.design/fluent-emoji:brain.svg" />
</svelte:head>

<slot />

<style>
  :global(html) {
    font-family: MiSans, -apple-system, sans-serif;
    font-weight: 330;
    --uno: flex flex-col items-center overflow-x-hidden;
  }

  :global(body)::-webkit-scrollbar {
    --uno: w-1 bg-transparent 2xl:w-3.5 lg:w-2.5 md:w-2 sm:w-1.5 xl:w-3;
  }

  :global(body)::-webkit-scrollbar-thumb {
    --uno: rounded-l-sm bg-neutral-5/30 hover-bg-neutral-5/70;
  }

  :global(body *)::-webkit-scrollbar {
    --uno: hidden;
  }
</style>
