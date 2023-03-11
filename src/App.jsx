import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/core/navbar/Navbar";
import "./App.css";
import Banner from "./components/views/home/banner/Banner";
import TravelDetails from "./components/views/home/travelDetails/TravelDetails";
import Service from "./components/views/home/service/Service";
import Footer from "./components/core/footer/Footer";

function App() {
  let { pathname } = useLocation();

  return (
    <div className="App">
      <Navbar />

      <section className="container p-2">
        <Outlet />
      </section>

      {/* home page content would be here */}
      {pathname === "/" && <>
        <Banner />
        <TravelDetails />
        <Service />
        <Footer />
      </>
      }

      <footer>Some footer data</footer>
    </div>
  );
}

export default App;
