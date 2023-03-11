import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/core/navbar/Navbar";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  let { pathname } = useLocation();

  return (
    <div className="App">
      <Navbar />

      <section className="container p-2">
        <Outlet />
      </section>

      {/* home page content would be here */}
      {pathname === "/" && <Header />}
      <footer>Some footer data</footer>
    </div>
  );
}

export default App;
