import React from 'react'
import './css/Navbar.css'
import Logo from '../../assets/img/logo.png'
import Menu from './img/hamburger-menu.png'
import Search from './img/search.png'
import Voice from './img/voice.png'
import Avatar from './img/avatar.png'
import Notification from './img/notification.png'
import Video from './img/video.png'




function Navbar() {
  return (
    <div className='header'>
      <div className="row">
        <div className="col-lg-2 col-3 d-flex align-items-center">
          <div className="header_logo_section">
            <img src={Menu} alt="menu_bar" className='menu_bar' />
            <img src={Logo} alt='logo' className='logo_img' />
          </div>
        </div>
        <div className="col-lg-8 col-6 d-flex align-items-center">
          <div className="header_search_section">
            <div className="search">
              <input placeholder='Search' type="text" className='search_input' />
              <div className='search_icon_div'>
                <img src={Search} alt="search-icon" className='search_icon' />
              </div>
            </div>
            <div className='voice_icon_div'>
              <img src={Voice} alt="voice" className='voice_icon' />
            </div>
          </div>
        </div>
        
        <div className="col-lg-2 col-3 d-flex align-items-center">
          <div className='video_icon_section'>
            <div className="video_icon_div">
              <img src={Video} alt="video-icon" className='video_icon' />
            </div>
            <div className="notification_icon_div">
              <img src={Notification} alt="notification-icon" className='notification_icon' />
              <span>9+</span>
            </div>
            <div className="avatar_icon_div">
              <img src={Avatar} alt="avatar-icon" className='avatar_icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
