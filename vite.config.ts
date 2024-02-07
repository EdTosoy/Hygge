import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    coverage: {
      reporter: ["default", "html"],
    },
    exclude: [
      ...configDefaults.exclude,
      "src/**/*.tsx",
      // Cypress tests
      "**/__test__/**/*.spec.tsx",
      "**/__test__/**/*.cy.tsx",
    ],
  },
  plugins: [react()],
});
