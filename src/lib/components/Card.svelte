<script lang="ts">
  export let search = "";
  export let content: string;
  export let icon: string;
  export let fixable = false;
  export let buttons = false;
</script>

<div class="relative flex flex-col gap-1 b-(1 zinc-2) px-3 py-2">
  <div class="absolute left-0 top-0 rounded-full bg-white p-1 -translate-1/2">
    <div class="{icon} text-lg" />
  </div>

  <div class="max-w-sm text-sm">{content}</div>

  <div class="flex flex-row gap-1.5 text-xs -translate-x-0.5 [&>div]:(rounded-sm px-1 py-0.5)">
    <slot />
    {#if search}
      <div class="flex flex-row items-center gap-0.5 b-(1 current dashed) text-sky-6">
        <div class="i-lucide-search text-0.9em" />
        {search}
      </div>
    {/if}
    {#if fixable}
      <div class="flex flex-row items-center gap-0.5 b-(1 current dashed) text-teal-6">
        <div class="i-material-symbols-auto-fix text-0.9em" />
        修改建议
      </div>
    {/if}
    {#if buttons}
      <div class="flex flex-row items-center gap-1">
        <div class="grid place-items-center text-zinc">
          <div class="i-mingcute-copy-2-line" />
        </div>
        <div class="grid place-items-center text-indigo">
          <div class="i-healthicons-artificial-intelligence text-1.3em" />
        </div>
      </div>
    {/if}
  </div>
</div>
