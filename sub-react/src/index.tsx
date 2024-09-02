import { createRoot, Root } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./public-path.js";

reportWebVitals();

let root: Root;
function render(props: any) {
  const { container } = props;
  const dom = container
    ? container.querySelector("#root")
    : document.getElementById("root");

  root = createRoot(dom);
  root.render(
    <BrowserRouter basename="/sub-react">
      <App />
    </BrowserRouter>
  );
}

// 判断是否在 qiankun 环境下，非 qiankun 环境下独立运行
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

// 只会在微应用初始化调用
export async function bootstrap() {
  console.log("sub react to bootstraped");
}

export async function mount(props: any) {
  render(props);
}

export async function unmount(props: any) {
  root.unmount();
}
