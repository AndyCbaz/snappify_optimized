import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  server: {
    host: "0.0.0.0",
  },
  build: {
    minify: "esbuild", // Esbuild es rápido y eficiente
  },
});
