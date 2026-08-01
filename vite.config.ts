import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // three.js (behind the async AnimatedWave chunk) is inherently ~500kB;
    // it's already code-split and lazy-loaded, so the default warning here
    // is a false positive rather than a real bundling problem.
    chunkSizeWarningLimit: 600,
  },
});
