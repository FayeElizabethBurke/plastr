import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  output: "static",
  site: "https://fayeelizabethburke.github.io",
  base: "/plastr",
  build: { assets: "_assets" },
});
