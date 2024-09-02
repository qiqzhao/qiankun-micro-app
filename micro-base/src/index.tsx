import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { start, registerMicroApps } from "qiankun";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const apps = [
  {
    name: "sub-react",
    entry: "//localhost:3001",
    activeRule: "sub-react",
    container: "#sub-app",
  },
  {
    name: "sub-vue",
    entry: "//localhost:5173",
    activeRule: "sub-vue",
    container: "#sub-app",
  },
  {
    name: "sub-umi",
    entry: "//localhost:8000",
    activeRule: "sub-umi",
    container: "#sub-app",
  },
];

registerMicroApps(apps, {
  beforeLoad: [async (app) => console.log("before load", app.name)],
  beforeMount: [async (app) => console.log("before mount", app.name)],
  afterMount: [async (app) => console.log("after mount", app.name)],
});

start();
