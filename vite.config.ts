import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { createHtmlPlugin } from 'vite-plugin-html';

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

  server: {
    proxy: {
      "/api": {
        target: "https://hygge-backend-production.up.railway.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api/"),
        secure: false,
      },
    },
    historyApiFallback: true, // Add this line
  },
  plugins: [react(), tsconfigPaths(), createHtmlPlugin()],
});