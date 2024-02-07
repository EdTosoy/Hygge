import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  viewportWidth: 1262,
  viewportHeight: 934,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
