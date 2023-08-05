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


  const sharedState ={
    showMenu,
    setShowMenu,
    isMobileSearch,
    setIsMobileSearch
  }

  return (
    <MyContext.Provider value={sharedState}>
      <div className='app'>
        <Navbar />
        <Channel />
      </div>
    </MyContext.Provider>
  );
}

export default App;
