<script>
  // @ts-nocheck
  import events from "./events.json";
  import glossary from "./glossary.json";
</script>

<table class="m-5 text-xs">
  <caption class="mb-2 text-base">公关事件案例</caption>
  <tbody>
    {#each events as { type, description, source, ending, comments }}
      <tr>
        <td class="ws-nowrap">{type}</td>
        <td>
          <a href={source} class:text-#ff0050={source.includes("douyin")} class:text-#ff9933={source.includes("weibo")}>
            {description}
          </a>
        </td>
        <td class="flex flex-col">
          {#each comments as { content, tags = [] }}
            <div>
              {content}
              {#each tags as tag}
                <span class="text-red">({tag})</span>
              {/each}
            </div>
          {/each}
        </td>
        <td class:text-neutral-3={!ending}>{ending}</td>
      </tr>
    {/each}
  </tbody>
</table>

<table class="m-5 mt-0 text-sm">
  <caption>网络热梗及解释</caption>
  <tbody>
    {#each glossary as { term, definition }}
      <tr>
        <td class="ws-nowrap">{term}</td>
        <td>{definition}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  caption {
    --uno: text-base;
  }

  tr {
    --uno: b-1 *:p-1.5;
  }
</style>
