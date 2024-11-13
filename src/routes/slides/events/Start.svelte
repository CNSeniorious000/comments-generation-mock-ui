<script lang="ts">
  import { fly } from "svelte/transition";

  export let state: "before" | "ready" | "loading" | "done" = "before";

  $: state === "loading" && setTimeout(() => state = "done", 3000);
</script>

<button disabled={state === "before"} class="relative h-2em w-5.5em overflow-hidden rounded text-sm text-white transition-width [&>div>*]:(absolute left-1/2 top-1/2 -translate-1/2) active:scale-95 disabled:(scale-85 op-0)" class:duration-600={state !== "ready"} class:!w-3.5em={state === "loading" || state === "done"} on:click={() => state = "loading"}>
  <div class="size-full bg-blue hover:bg-sky" class:bg-indigo={state === "loading"} class:bg-emerald={state === "done"}>

    {#if state === "loading"}
      <div transition:fly={{ y: 20 }} class="i-svg-spinners-90-ring-with-bg" />
    {:else if state === "done"}
      <div transition:fly={{ y: -20 }} class="i-tabler-circle-check-filled text-base" />
    {:else}
      <div transition:fly={{ y: -20 }} class="ws-nowrap">开始演练</div>
    {/if}

  </div>
</button>
