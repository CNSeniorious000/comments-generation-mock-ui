<script>
  import Horizontal from "./Horizontal.svelte";
  import Vertical from "./Vertical.svelte";

  export let l = false;
  export let r = false;
  export let t = false;
  export let b = false;

  export let opacity = "0.2";
</script>

<div class="{$$restProps.class ?? ""} relative">
  <div class="pointer-events-none absolute inset-0" aria-hidden="true" style:opacity>
    {#if t}
      <div class="absolute top-0 w-full -translate-y-1/2">
        <Horizontal />
      </div>
    {/if}
    {#if b}
      <div class="absolute bottom-0 w-full translate-y-1/2">
        <Horizontal />
      </div>
    {/if}
    {#if l}
      <div class="absolute left-0 h-full -translate-x-1/2">
        <Vertical />
      </div>
    {/if}
    {#if r}
      <div class="absolute right-0 h-full translate-x-1/2">
        <Vertical />
      </div>
    {/if}
  </div>
  <slot />
</div>
