import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.astralarra.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    // Tag lists are thin pages kept out of search (noindex), so they stay out of the sitemap too.
    sitemap({ filter: (page) => !page.includes("/tags/") }),
  ],
});
