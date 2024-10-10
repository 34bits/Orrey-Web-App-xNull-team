import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        app: resolve(__dirname, "src/pages/app.html"),
        appGr: resolve(__dirname, "src/pages/app-gr.html"),
      },
      chunkSizeWarningLimit: 10000,
    },
  },
});
