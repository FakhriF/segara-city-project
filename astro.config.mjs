// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://segara-city-project.fakhri6203.workers.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});
