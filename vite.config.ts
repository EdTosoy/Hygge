import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    minify: true,
    sourcemap: false,
    target: "modules",
  },

  test: {
    exclude: [
      ...configDefaults.exclude,
      "src/**/*.tsx",
      // Cypress tests
      "**/__test__/**/*.spec.tsx",
      "**/__test__/**/*.cy.tsx",
    ],
  },

  server: {
    proxy: {
      "/api": {
        target: "https://hygge-backend.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
