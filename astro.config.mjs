<<<<<<< HEAD
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
=======
// @ts-ignore - Vite API compatibility issue between Tailwind v4 and Vite 6.0+
import { defineConfig } from "astro/config";
// import tailwindcss from "@tailwindcss/vite";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from '@astrojs/cloudflare';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
>>>>>>> master
