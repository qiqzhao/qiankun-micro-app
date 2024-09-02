import { useEffect, useState } from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import routes from "./routes";
import Logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/home";

const { Sider, Header, Content } = Layout;

const AppContent = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const [selectedPath, setSelectedPath] = useState(
    routes.find((item) => currentPath.includes(item.key))?.key || ""
  );

  useEffect(() => {
    const _wr = (type: string) => {
      const orig = (window as any).history[type];
      return function (this: Window, ...args: any[]) {
        const rv = orig.apply(this, args);
        const e: any = new Event(type);
        e.arguments = args;
        window.dispatchEvent(e);
        return rv;
      };
    };

    window.history.pushState = _wr("pushState");

    const bindHistory = () => {
      const currentPath = window.location.pathname;
      setSelectedPath(
        routes.find((item) => currentPath.includes(item.key))?.key || ""
      );
    };

    window.addEventListener("pushState", bindHistory);

    return () => {
      window.removeEventListener("pushState", bindHistory);
    };
  }, []);

  const handleMenuClick = (key: string) => {
    setSelectedPath(key);
    navigate(key);
  };

  return (
    <Layout>
      <Sider collapsedWidth={0}>
        <img src={Logo} alt="logo" className="page-logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["main-app"]}
          selectedKeys={[selectedPath || "main-app"]}
          onClick={({ key }) => handleMenuClick(key)}
          items={routes}
        />
      </Sider>

      <Layout>
        <Header style={{ padding: 0 }}></Header>
        <Content
          style={{
            margin: "24px 16px 0",
            height: "100%",
            background: "#fff",
            padding: "24px",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <div id="sub-app"></div>
        </Content>
      </Layout>
    </Layout>
  );
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;