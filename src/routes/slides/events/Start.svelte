<script lang="ts">
  import { fly } from "svelte/transition";

  export let state: "before" | "ready" | "loading" | "done" = "before";

  $: state === "loading" && setTimeout(() => state = "done", 3000);
</script>

<button disabled={state === "before"} class="relative w-fit overflow-hidden rounded text-sm text-white transition-all [&>div>div>*]:(absolute left-1/2 top-1/2 -translate-1/2) disabled:(op-40 grayscale) active:not-disabled:scale-95" on:click={() => state = "loading"}>
  <div class="h-2em w-5.5em transition-width" class:duration-600={state !== "ready"} class:!w-3.5em={state === "loading" || state === "done"}>
    <div class="size-full bg-blue transition-background-color hover:bg-sky" class:bg-indigo={state === "loading"} class:bg-emerald={state === "done"}>

      {#if state === "loading"}
        <div transition:fly={{ y: 20 }} class="i-svg-spinners-90-ring-with-bg"></div>
      {:else if state === "done"}
        <div transition:fly={{ y: -20 }} class="i-tabler-circle-check-filled text-base"></div>
      {:else}
        <div transition:fly={{ y: -20 }} class="ws-nowrap">开始演练</div>
      {/if}

    </div>
  </div>
</button>
