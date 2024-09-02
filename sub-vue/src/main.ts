import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let app: any;

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  createApp(App).mount("#app");
} else {
  renderWithQiankun({
    mount(props) {
      app = createApp(App);
      app.mount(props.container?.querySelector("#app"));
    },
    bootstrap() {
      console.log(" sub vue bootstrap");
    },
    update() {
      console.log(" sub vue update");
    },
    unmount() {
      console.log(" sub vue unmount");
      app?.unmount();
    },
  });
}
