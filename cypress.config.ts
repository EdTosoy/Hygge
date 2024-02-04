import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  viewportWidth: 1672,
  viewportHeight: 854,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
