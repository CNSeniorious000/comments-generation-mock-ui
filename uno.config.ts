import icons from "./src/routes/demo/emoji-carousel/icons.json";
import extractorSvelte from "@unocss/extractor-svelte";
import { defineConfig, presetIcons, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from "unocss";

const config = defineConfig({
  extractors: [extractorSvelte()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  presets: [presetUno(), presetIcons(), presetTypography()],
  safelist: icons,
  shortcuts: {
    col: "flex flex-col",
    row: "flex flex-row",
    center: "grid place-items-center",
  },
});

export default config;
