import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https:matiassolisschneeberger.github.io',
  base: 'swifties-eras-tour',
  integrations: [tailwind({
      applyBaseStyles: false,
    }),
    react()],
  output: "server",
  adapter: vercel()
});