import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/core/navbar/Navbar';
import './App.css';
import Banner from './components/views/home/banner/Banner';
import TravelDetails from './components/views/home/travelDetails/TravelDetails';
import Footer from './components/core/footer/Footer';
import Services from './components/views/home/services/Services';

function App() {
  let { pathname } = useLocation();

  return (
    <div className="App">
      <Navbar />

      <section className="container">
        <Outlet />
      </section>

      {/* home page content would be here */}
      {pathname === '/' && (
        <>
          <Banner />
          <TravelDetails />
          <Services />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
