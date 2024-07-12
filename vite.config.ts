import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

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
  plugins: [react()],
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
});
