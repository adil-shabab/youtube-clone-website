import React from 'react'
import './css/Sidebar.css'
import SidebarCard from '../sidebarcard/SidebarCard'
import Home from './img/icons/home.png'
import Explore from './img/icons/explore.png'
import Subscription from './img/icons/subscribe.png'

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarCard Img={Home} Txt="Home" is_active={true} />
        <SidebarCard Img={Explore} Txt="Explore" is_active={false} />
        <SidebarCard Img={Subscription} Txt="Subscription" is_active={false} />

        <div className="line"></div>

        
    </div>
  )
}

export default Sidebar
