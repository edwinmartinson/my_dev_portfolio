import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { reactRouter } from "@react-router/dev/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [tsconfigPaths(), reactRouter(), vanillaExtractPlugin()],
  // server: {
  //   host: "192.168.251.35",
  //   port: 5173,
  // },
});
