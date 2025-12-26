// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://tam11a.dev",
  integrations: [icon({
    include: {
      hugeicons: ["*"],
      "vscode-icons": ["*"],
      "simple-icons": ["*"],
    },
  }), sitemap()],
});