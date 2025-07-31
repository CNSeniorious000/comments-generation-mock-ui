<script lang="ts">
  import Event from "./Event.svelte";

  let inputState: "empty" | "over" | "dropped";
  let buttonState: "before" | "ready" | "loading" | "done";
  let showBoth: boolean;

  let zoom = false;

  $: showBoth ? setTimeout(() => zoom = true, 650) : (zoom = false);
</script>

<Event bind:zoom bind:inputState bind:buttonState bind:showBoth>
  <svelte:fragment slot="overlay">
    <div class="left-10vw size-40vmax bg-#ff9933/10 blur-90 transition-transform duration-900" class:translate-x-30vw={zoom}></div>
    <div class="bottom-10vh right-10vw size-40vmax bg-#E6162D/5 blur-60"></div>
  </svelte:fragment>
</Event>

<svelte:window on:click={() => buttonState === "done" && (zoom = !zoom)} />
