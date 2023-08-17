import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Feed from './pages/feed/Feed';
import Vedio from './pages/vedio/Vedio';
import React, { useState } from 'react';
import MyContext from './context/MyContext';
import Channel from './pages/channel/Channel';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobileSearch, setIsMobileSearch] = useState(false);
  const [selectedItem, setSelectedItem] = useState("All");



  const sharedState ={
    showMenu,
    setShowMenu,
    isMobileSearch,
    setIsMobileSearch,
    selectedItem,
    setSelectedItem
  }

  return (
    <MyContext.Provider value={sharedState}>
      <div className='app'>
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Feed />}/>
            <Route path="/video/:id" element={<Vedio />}/>
            <Route path="/channel/:id" element={<Channel />}/>
          </Routes>  
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
