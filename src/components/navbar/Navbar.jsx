import React from 'react'
import './css/Navbar.css'
import Logo from '../../assets/img/logo.png'
import Menu from './img/hamburger-menu.png'



function Navbar() {
  return (
    <div className='header'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-md-2">
            <div className="header_logo_section d-flex-full">
              <img src={Menu} alt="menu_bar" className='menu_bar' />
              <img src={Logo} alt='logo' className='logo_img' />
            </div>
          </div>
          <div className="col-md-8">

          </div>
          
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
