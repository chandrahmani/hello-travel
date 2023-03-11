import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Adventure from './components/adventure/adventure';
import Navbar from './components/core/navbar/Navbar';
import Header from './components/header/Header'
import Service from './components/service/Service';
import TravelDetails from './components/travelDetails/TravelDetails';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Header />
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
