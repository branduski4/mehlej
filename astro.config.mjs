import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel/serverless"; // or "@astrojs/vercel/edge" if you prefer edge

export default defineConfig({
  integrations: [tailwind(), vue()],
  adapter: vercel(),
  output: "server", // required for adapter to work
  server: {
    port: 4321,
  },
});
