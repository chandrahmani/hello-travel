import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Adventure from './components/adventure/adventure';
import Navbar from './components/core/navbar/Navbar';
import Home from './components/home/Home';
import Service from './components/service/Service';
import TravelDetails from './components/travelDetails/TravelDetails';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          <Route path='/' element={<Service />}>
            <Route path='adventure' element={<Adventure />} />
            <Route path='travel' element={<TravelDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
