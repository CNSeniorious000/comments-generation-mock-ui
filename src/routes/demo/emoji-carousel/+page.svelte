<script lang="ts">
  import icons from "./icons.json";
  import Emoji from "$lib/components/Emoji.svelte";
  import { choice } from "$lib/utils/random";
  import { onMount } from "svelte";

  let emoji = choice(icons);

  onMount(() => {
    setInterval(() => {
      emoji = choice(icons, emoji);
    }, 600);
  });
</script>

<div class="contents text-5xl">
  <Emoji {emoji} delay={50} amount={2} />
</div>
