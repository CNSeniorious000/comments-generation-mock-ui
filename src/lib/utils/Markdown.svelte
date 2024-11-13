<script lang="ts">
  import "./md.css";

  import SvelteMarkdown from "svelte-markdown";
  import { fly } from "svelte/transition";

  export let text: string;
</script>

<article in:fly={{ y: 5 }} class="max-h-full max-w-full prose">
  <SvelteMarkdown source={text} />
</article>
