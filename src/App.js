import logo from './logo.svg';
import './App.scss';
import HeadOffer from './Components/header-offer';
import Navbar from './Components/Navbar';
import {Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import More from './Pages/More'
import Categories from './Pages/Categories'
import DailyDeal from './Pages/DailyDeals'

function App() {
  return (
    <div className="main-wrapper">
      <HeadOffer />
      <Navbar />
      <Routes>
          <Route exact index path='/' element={<Home />} />
          <Route index path='/categories' element={<Categories />} />
          <Route index path='/categories' element={<Categories />} />
          <Route index path='/dailydeals' element={<DailyDeal />} />
          <Route index path='/more' element={<More />} />
      </Routes>
    </div>
  );
}

export default App;
