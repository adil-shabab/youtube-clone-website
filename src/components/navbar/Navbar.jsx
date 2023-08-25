import React, {useContext, useState, useRef, useEffect} from 'react'
import './css/Navbar.css'
import Logo from '../../assets/img/logo.png'
import Menu from './img/hamburger-menu.png'
import Search from './img/search.png'
import Voice from './img/voice.png'
import Close from './img/close.png'
import Avatar from './img/avatar.png'
import Notification from './img/notification.png'
import Video from './img/video.png'
import MyContext from '../../context/MyContext'
import { useNavigate } from 'react-router-dom';
import SearchIcon from './img/search.png'




function Navbar() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const {isSidebarActive, setIsSidebarActive, showMenu,setShowMenu, setIsMobileSearch, isMobileSearch, setSelectedItem} = useContext(MyContext)




  const handleInputChange = (event) =>{
    setSearch(event.target.value)
    if (event.target.value !== '') {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }


  return (
    <div className='header'>
      <div className={`row ${isMobileSearch && 'd-none'}`}>
        <div className="col-lg-2 col-md-3 col-6 d-flex align-items-center">
          <div className="d-md-block d-none header_logo_section">
            <img onClick={() => setIsSidebarActive(!isSidebarActive)} src={Menu} alt="menu_bar" className='cursor_pointer menu_bar' />
            <img src={Logo} alt='logo' className='logo_img' />
          </div>
          <div className="d-md-none d-block header_logo_section">
            <img onClick={() => setIsSidebarActive(!isSidebarActive)} src={Menu} alt="menu_bar" className='cursor_pointer menu_bar' />
            <img src={Logo} alt='logo' className='logo_img' />
          </div>
        </div>
        <div className="col-lg-8 col-md-6 col-1 d-flex align-items-center">
          <div className="header_search_section">
            <div className="search">
              <input value={search} onChange={handleInputChange} placeholder='Search' type="text" className='search_input' />
              <div onClick={()=> {
                setSelectedItem(search)
                navigate("/")
              }} className='search_icon_div'>
                <img src={Search} alt="search-icon" className='search_icon' />
              </div>
            </div>


            {/*<div ref={destinationRef} className={!isTyping ? 'd-none' : 'auto_complete'}>
              {isTyping &&             
                <h6 className="txt"><img src={SearchIcon} className='search_icoon' /> Welcome to my channel</h6>
              }
            </div>*/}

            <div className='voice_icon_div'>
              <img src={Voice} alt="voice" className='voice_icon' />
            </div>
          </div>
        </div>
        
        <div className="col-lg-2 col-md-3 col-5 d-flex align-items-center">
          <div className='video_icon_section'>
            <div onClick={()=> setIsMobileSearch(!isMobileSearch)} className="d-md-none d-block video_icon_div">
              <img src={Search} alt="video-icon" style={{marginRight: '13px'}} className='video_icon' />
            </div>
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

      <div className={`mobile_search ${isMobileSearch && 'd-flex'}`}>
        <div style={{width: '90%', position: 'relative'}}>
          <input type="text" placeholder='Search' />
          <img src={Search} className='search img-fluid' alt="" />
        </div>
        <img onClick={()=> setIsMobileSearch(!isMobileSearch)} src={Close} alt="" className="close" />
      </div>

    </div>
  )
}

export default Navbar
