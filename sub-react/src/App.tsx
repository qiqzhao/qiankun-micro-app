import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { List } from "./pages/list";
import { Detail } from "./pages/detail";

function App() {
  const goVue = () => {
    window.history.pushState({}, "", "/sub-vue");
  };
  return (
    <div>
      <h2>sub react</h2>
      <div className="menu">
        <Link to="/">list</Link>
        <Link to="/detail">detail</Link>
        <a onClick={goVue}> sub vue main</a>
      </div>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
