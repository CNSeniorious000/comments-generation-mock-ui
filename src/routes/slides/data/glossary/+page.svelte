<script>
  import glossary from "../../../data/glossary.json";
</script>

<div class="fixed inset-0 center">
  <div class="h-lg w-4xl overflow-scroll b-(1 zinc-2)">
    <table>

      <thead class="sticky top-0 b-b-(1 zinc-2) bg-white/80 text-left backdrop-blur-xl">
        <tr class="*:font-550">
          <th>网语</th>
          <th>解释</th>
        </tr>
      </thead>

      <tbody>
        {#each glossary as { term, definition }}
          <tr>
            <td class="ws-nowrap">{term}</td>
            <td>{definition}</td>
          </tr>
        {/each}
      </tbody>

    </table>
  </div>
</div>

<style>
  th, td {
    --uno: b-1 b-zinc-2 px-2.5 py-1.5 text-zinc-9 first:b-l-0 last:b-r-0;
  }
</style>
