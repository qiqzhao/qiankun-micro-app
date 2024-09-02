import { defineConfig } from "umi";

export default defineConfig({
  base: "sub-umi",
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  plugins: ["@umijs/plugins/dist/qiankun"],
  qiankun: {
    slave: {},
  },
  npmClient: "npm",
});
