import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Adventur from './components/adventur/Adventur';
import Navbar from './components/core/navbar/Navbar';
import Header from './components/header/Header'
import Servic from './components/service/Servic';
import TravelDtl from './components/travelDtl/TravelDtl';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='' element={<Servic />} />
            <Route path='adventur' element={<Adventur />} />
            <Route path='travel' element={<TravelDtl />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
