import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sub-vue",
  server: {
    cors: true,
  },
  plugins: [
    vue(),
    qiankun("sub-vue", {
      useDevMode: true,
    }),
  ],
});
