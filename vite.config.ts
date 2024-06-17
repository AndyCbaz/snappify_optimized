import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    host: "0.0.0.0",
  },
  build: {
    minify: "esbuild", // Esbuild es rápido y eficiente
  },
});
