import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/core/navbar/Navbar";
import "./App.css";
import Banner from "./components/views/banner/Banner";

function App() {
  let { pathname } = useLocation();

  return (
    <div className="App">
      <Navbar />

      <section className="container p-2">
        <Outlet />
      </section>

      {/* home page content would be here */}
      {pathname === "/" && <Banner />}
      <footer>Some footer data</footer>
    </div>
  );
}

export default App;
