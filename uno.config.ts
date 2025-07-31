import icons from "./src/routes/demo/emoji-carousel/icons.json";
import { presetHeroPatterns } from "@julr/unocss-preset-heropatterns";
import extractorSvelte from "@unocss/extractor-svelte";
import { defineConfig, presetIcons, presetTypography, presetWebFonts, presetWind3, transformerDirectives, transformerVariantGroup } from "unocss";

const config = defineConfig({
  extractors: [extractorSvelte()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  presets: [presetWind3(), presetWebFonts({ provider: "bunny", fonts: { mono: "Share Tech Mono" } }), presetIcons(), presetTypography(), presetHeroPatterns()],
  safelist: icons,
  shortcuts: {
    col: "flex flex-col",
    row: "flex flex-row",
    center: "grid place-items-center",
  },
});

export default config;
