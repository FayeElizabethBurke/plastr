import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  output: "static",
  site: "https://plastr.com.au",
  // Points directly to the shared assets folder so videos + logo
  // are served from the root: /logo.jpg, /hero.mp4, /hero-1.mp4 etc.
  publicDir: "../_plastr/assets",
  build: { assets: "_assets" },
});
