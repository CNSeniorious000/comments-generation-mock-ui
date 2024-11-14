<script>
  import Number from "./Number.svelte";
  import { spring } from "svelte/motion";

  let input = "0";

  const number = spring(0, { stiffness: 0.1, damping: 0.5 });

  $: number.set(+input);
</script>

<div class="fixed inset-0 center text-right">
  <Number number={Math.round($number)} />
  <input class="w-5em rounded px-2 py-1 ring-1" type="number" bind:value={input}>
</div>
