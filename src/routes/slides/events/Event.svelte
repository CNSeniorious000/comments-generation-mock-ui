<script lang="ts">
  import Left from "./Left.svelte";
  import Right from "./Right.svelte";
  import Start from "./Start.svelte";
  import { fade, fly, scale, slide } from "svelte/transition";

  export let inputState: "empty" | "over" | "dropped" = "empty";
  export let buttonState: "before" | "ready" | "loading" | "done" = "before";

  $: inputState === "dropped" && (buttonState = "ready");

  export let showBoth = false;
  $: showBoth = inputState === "dropped" && (buttonState === "loading" || buttonState === "done");

  export let zoom = false;

  export let moveLeft = 23;
</script>

{#if inputState === "dropped" && $$slots.overlay}
  <div in:fade={{ duration: 600 }} class="transition-opacity duration-900 [&>*]:(fixed rounded-full)" aria-hidden="true" class:op-50={zoom}>
    <slot name="overlay" />
  </div>
{/if}

<div in:scale={{ start: 0.97, duration: 600 }} class="absolute inset-0 center translate-x-$dx transition-transform duration-900" style:--dx={zoom ? `-${moveLeft}%` : 0}>

  <div class="relative h-3xl w-6xl col overflow-hidden b-1 rounded-md shadow-(black/4 xl) transition-transform duration-800" class:delay-100={zoom} class:scale-140={zoom}>
    <div class="row cursor-grab select-none items-center gap-4 b-b-1 bg-white bg-op-70 px-3.5 py-3 backdrop-blur-2xl transition-background-color duration-900" class:!bg-op-30={zoom}>
      <div class="row gap-1.9 [&>div]:(size-2.4 rounded-full)">
        <div class="animate-(fade-in duration-300 both) bg-red"></div>
        <div class="animate-(fade-in duration-300 delay-100 both) bg-amber"></div>
        <div class="animate-(fade-in duration-300 delay-200 both) bg-green"></div>
      </div>
      <h1 class="animate-(fade-in duration-700 delay-300 both) text-xs text-neutral-6 font-500 tracking-wide">InsightOut 公关演练场</h1>
      <div class="row grow items-center justify-end gap-4 text-neutral-3 transition-opacity duration-900" class:op-50={zoom}>
        <div class="mr-1 row animate-(fade-in duration-300 delay-700 both) items-center gap-0.5 rounded bg-neutral-3/20 py-1 pl-1.2 pr-1.6 text-xs text-neutral-5 -my-1">
          <div class="i-lucide-plus"></div>
          <span class="tracking-wide">New</span>
        </div>
        <div class="i-lucide-flag animate-(fade-in duration-600 delay-600 both)"></div>
        <div class="i-lucide-redo-2 animate-(fade-in duration-300 delay-500 both) text-neutral-5"></div>
        <div class="i-lucide-chart-pie animate-(fade-in duration-300 delay-400 both) text-neutral-5"></div>
        <div class="i-lucide-hammer animate-(fade-in duration-300 delay-300 both)"></div>
        <div class="mx-1 h-3 w-0 w-1.5pt animate-(fade-in duration-300 delay-200 both) bg-neutral-1"></div>
        <div class="i-lucide-copy-plus animate-(fade-in duration-300 delay-100 both) text-neutral-5"></div>
        <div class="i-lucide-compass animate-(fade-in duration-300 both)"></div>
      </div>
    </div>
    <div class="h-full row justify-between overflow-hidden bg-white">
      <div class="relative w-3/5 transition-transform duration-800" class:translate-x-33%={!showBoth}>
        {#if $$slots.left}
          <Left bind:state={inputState} {zoom}>
            <slot name="left" />
          </Left>
        {:else}
          <Left bind:state={inputState} {zoom} />
        {/if}
        <div class="absolute bottom-0 right-0 row gap-2 p-4">
          <Start bind:state={buttonState} />
        </div>
      </div>
      {#if showBoth}
        <div in:slide={{ axis: "x", duration: 900 }} class="center w-2/5 b-l-1">
          <div in:slide={{ axis: "x", duration: 900 }} class="absolute bottom-0 right-0 top-10 w-2/5 overflow-hidden">
            <div in:fly={{ x: -200, opacity: 0.4, duration: 900 }} class="absolute inset-0 transition-opacity duration-900" class:op-70={zoom}>
              <div class="absolute inset-0 transition-transform duration-800 bg-hero-topography-neutral-2/65 -m-55" class:delay-100={zoom} class:scale-80={zoom}></div>
            </div>
          </div>
          {#if $$slots.right}
            <Right>
              <slot name="right" />
            </Right>
          {:else}
            <Right />
          {/if}
        </div>
      {/if}
    </div>
  </div>

</div>
