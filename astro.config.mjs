import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  integrations: [tailwind(), vue()],
  adapter: vercel(),
  output: "static",
});
