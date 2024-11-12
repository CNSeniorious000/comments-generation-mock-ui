<script lang="ts">
  import Emoji from "$lib/components/Emoji.svelte";
  import { choice } from "$lib/utils/random";
  import { onMount } from "svelte";

  const icons = [
    "i-fluent-emoji-melting-face",
    "i-fluent-emoji-grinning-cat",
    "i-fluent-emoji-baby-chick",
    "i-fluent-emoji-broccoli",
    "i-fluent-emoji-game-die",
    "i-fluent-emoji-avocado",
    "i-fluent-emoji-beetle",
    "i-fluent-emoji-candy",
    "i-fluent-emoji-pill",
  ];

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
