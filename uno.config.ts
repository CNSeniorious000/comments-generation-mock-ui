import icons from "./src/routes/demo/emoji-carousel/icons.json";
import extractorSvelte from "@unocss/extractor-svelte";
import { defineConfig, presetIcons, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from "unocss";

const config = defineConfig({
  extractors: [extractorSvelte()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  presets: [presetUno(), presetIcons(), presetTypography()],
  safelist: icons,
});

export default config;
