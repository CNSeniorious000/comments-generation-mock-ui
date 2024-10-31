<script lang="ts">
  import "../md.css";

  import SvelteMarkdown from "svelte-markdown";

  export let text: string;
</script>

<article class="max-h-full max-w-full p-3 text-neutral-3 prose">
  <SvelteMarkdown source={text} />
</article>
