import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// BASE_PATH is set by the Pages workflow (/mca_nitw/); local dev serves from /.
// API_PROXY points the dev server's /api calls at the Express server so the
// auth cookie stays same-origin during development.
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": process.env.API_PROXY || "http://localhost:5000",
    },
  },
  preview: {
    port: 4173,
  },
});
