<script lang="ts">
  import * as echarts from "echarts";
  import { onMount } from "svelte";

  const data = {
    反串: 456,
    理智: 567,
    引战: 456,
    阴阳怪气: 678,
    质疑: 567,
    赞同: 789,
  };

  let div: HTMLDivElement;

  let width: number;
  let height: number;

  let chart: echarts.ECharts;

  let rotate = true;

  function resize(width: number, height: number) {
    if (chart) {
      chart.resize({ width: width || "auto", height: height || "auto" });
    }
  }

  $: resize(width, height);

  onMount(() => {
    chart = echarts.init(div, null, { width, height });

    chart.setOption({
      tooltip: {
        trigger: "item",
      },
      animationDelay: 1000,
      series: [
        {
          type: "pie",
          radius: ["10%", "70%"],
          roseType: "area",
          label: {
            fontSize: 17,
          },
          padAngle: 7,
          itemStyle: {
            borderRadius: 50,
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
            },
          },
          data: Object.entries(data).map(([key, value]) => ({ value, name: key })),
        },
      ],
    } as echarts.EChartsOption);

    requestAnimationFrame(() => {
      rotate = false;
    });
  });
</script>

<svelte:window
  on:resize={() => {
    width = div.clientWidth;
    height = div.clientHeight;
  }}
/>

<div class="h-6/7 w-full transition-transform duration-2000 ease-out" class:-rotate-90={rotate}>
  <div class="h-full w-full" bind:this={div}></div>
</div>
