import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

const aliasFolders = [
  "components",
  "type",
  "lib",
  "modules",
  "store",
  "hooks",
  "hocs",
  "assets",
  "layouts",
];

export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      ...Object.fromEntries(
        aliasFolders.map((v) => [
          `@${v}`,
          `${path.resolve(__dirname, `./src/${v}/`)}`,
        ])
      ),
      "@public": `${path.resolve(__dirname, "./public/")}`,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
