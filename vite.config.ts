import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    exclude: [
      ...configDefaults.exclude,
      "src/**/*.tsx",
      // Cypress tests
      "**/__test__/**/*.spec.tsx",
      "**/__test__/**/*.cy.tsx",
    ],
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: resolve("src/"),
      types: resolve("src/@types/"),
      assets: resolve("src/assets/"),
      components: resolve("src/components/"),
      constants: resolve("src/constants/"),
      containers: resolve("src/containers/"),
      context: resolve("src/context/"),
      hooks: resolve("src/hooks/"),
      layout: resolve("src/layout/"),
      locales: resolve("src/locales/"),
      pages: resolve("src/pages/"),
      routes: resolve("src/routes/"),
      utils: resolve("src/utils/"),
    },
  },
});
