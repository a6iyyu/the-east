import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import partytown from "@astrojs/partytown";

export default defineConfig({
  integrations: [vue(), partytown()],
});