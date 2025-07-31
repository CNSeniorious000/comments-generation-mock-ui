<script lang="ts">
  import * as echarts from "echarts";
  import { onMount } from "svelte";

  let div: HTMLDivElement;

  let width: number | string;
  let height: number | string;

  let chart: any;

  let transform = true;

  function resize(width: number | string, height: number | string): void {
    if (chart) {
      chart.resize({ width: width || "auto", height: height || "auto" });
    }
  }

  $: resize(width, height);

  onMount(() => {
    let base: number = +new Date();
    const interval: number = 5 * 60 * 1000; // 5 minutes
    const date: string[] = [];
    const baseData: number[] = [0, 50, 500, 9000, 2000, 3000, 1000, 800, 400, 1000, 800, 400];
    const data: number[] = [];

    function interpolate(arr: number[], factor: number): number[] {
      const result: number[] = [];
      for (let i = 0; i < arr.length - 1; i++) {
        const start: number = arr[i];
        const end: number = arr[i + 1];
        for (let j = 0; j < factor; j++) {
          const t: number = j / factor;
          result.push((start * (1 - t) + end * t) * (Math.random() + 1));
        }
      }
      result.push(arr[arr.length - 1]);
      return result;
    }

    const interpolatedData: number[] = interpolate(baseData, 80);

    for (let i = 0; i < interpolatedData.length; i++) {
      const now: Date = new Date((base += interval));
      date.push(
        [now.getHours(), now.getMinutes()]
          .map(n => n.toString().padStart(2, "0"))
          .join(":"),
      );
      let newValue = interpolatedData[i];
      if (newValue < 0)
        newValue = 0;
      data.push(newValue);
    }

    chart = echarts.init(div, null, { width, height });

    chart.setOption({
      tooltip: {
        trigger: "axis",
        position(pt) {
          return [pt[0], "10%"];
        },
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: "none",
          },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: date,
        axisLabel: {
          interval: 100,
          showMinLabel: false,
          color: "#aaaaaa",
        },
        axisLine: { show: false },
        axisTick: {
          show: true,
          length: 5,
          lineStyle: {
            color: "#cccccc",
          },
        },
        splitLine: { show: false },
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "100%"],
        max: 20000,
        show: false,
        splitLine: { show: false },
      },
      dataZoom: [
        {
          type: "inside",
          start: 0,
          end: 100,
        },
      ],
      series: [
        {
          type: "line",
          showSymbol: false,
          itemStyle: {
            color: "#2a57ff80",
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2a57ff" },
              { offset: 1, color: "#2a57ff00" },
            ]),
          },
          lineStyle: { width: 1 },
          data,
        },
      ],
    } as echarts.EChartsOption);

    requestAnimationFrame(() => {
      transform = false;
    });
  });
</script>

<svelte:window
  on:resize={() => {
    width = div.clientWidth;
    height = div.clientHeight;
  }}
/>

<div class="h-6/7 w-full transition-all duration-1000" class:op-0={transform} class:-translate-x-3={transform}>
  <div class="h-full w-full" bind:this={div}></div>
</div>
