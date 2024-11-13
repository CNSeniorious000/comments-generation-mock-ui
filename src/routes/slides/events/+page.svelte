<script>
  import Left from "./Left.svelte";
  import Right from "./Right.svelte";
</script>

<div class="[&>*]:(fixed rounded-full)" aria-hidden="true">
  <div class="left-10vw size-40vmax bg-#ff9933/10 blur-90" />
  <div class="bottom-10vh right-10vw size-40vmax bg-#E6162D/5 blur-60" />
</div>

<div class="absolute inset-0 center">

  <div class="h-3xl w-6xl col overflow-hidden b-1 rounded-md bg-white/70 shadow-(black/4 xl) backdrop-blur-2xl">
    <div class="row cursor-grab select-none items-center gap-4 b-b-1 px-3.5 py-3">
      <div class="row gap-1.9 [&>div]:(size-2.4 rounded-full)">
        <div class="bg-red" />
        <div class="bg-amber" />
        <div class="bg-green" />
      </div>
      <h1 class="text-xs text-neutral-6 font-500 tracking-wide">InsightOut 公关演练场</h1>
      <div class="row grow items-center justify-end gap-4 text-neutral-3">
        <div class="mr-1 row items-center gap-0.5 rounded bg-neutral-3/20 py-1 pl-1.2 pr-1.6 text-xs text-neutral-5 -my-1">
          <div class="i-lucide-plus" />
          <span class="tracking-wide">New</span>
        </div>
        <div class="i-lucide-flag" />
        <div class="i-lucide-redo-2 text-neutral-5" />
        <div class="i-lucide-chart-pie text-neutral-5" />
        <div class="i-lucide-hammer" />
        <div class="mx-1 h-3 w-0 w-1.5pt bg-neutral-1" />
        <div class="i-lucide-copy-plus text-neutral-5" />
        <div class="i-lucide-compass" />
      </div>
    </div>
    <div class="h-full row justify-between overflow-hidden bg-white">
      <div class="w-3/5">
        <Left />
      </div>
      <div class="bg-hero-topography-neutral-1 center w-2/5 b-l-1">
        <Right />
      </div>
    </div>
  </div>
</div>
