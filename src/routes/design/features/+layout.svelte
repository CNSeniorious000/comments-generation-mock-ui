<script>
  import Box from "$lib/components/lines/Box.svelte";
</script>

<div class="h-2em flex flex-row gap-5 text-zinc-7">
  <Box l t b class="h-fit flex flex-row gap-4 p-4" opacity="0.05">
    <slot />
  </Box>
</div>
