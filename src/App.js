import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Feed from './pages/feed/Feed';
import Vedio from './pages/vedio/Vedio';
import React, { useState } from 'react';
import MyContext from './context/MyContext';

function App() {
  const [showMenu, setShowMenu] = useState(false);


  const sharedState ={
    showMenu,
    setShowMenu
  }

  return (
    <MyContext.Provider value={sharedState}>
      <div className='app'>
        <Navbar />
        <Feed />
      </div>
    </MyContext.Provider>
  );
}

export default App;
