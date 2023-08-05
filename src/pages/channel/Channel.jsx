import React, { useContext } from 'react'
import './css/Channel.css'
import MyContext from '../../context/MyContext'
import Sidebar from '../../components/sidebar/Sidebar'
import Bg from './img/bg.png'
import Logo from './img/logo.jpg'

function Channel() {

  const {showMenu, setShowMenu} = useContext(MyContext)



  return (
  <div className='feed_container'>
    <div className="content">
      <div className={`sidebar_parent ${showMenu && 'd-block'}`}>
        <Sidebar/>
      </div>
      <div onClick={() => {
        if(showMenu) {
          setShowMenu(false)
        }}} className="vedio_parent">
        
        <img src={Bg} className='mt-2 img-fluid' />

        <div className="row">
          <div className="col-md-6">
            <div className="channel_details">
               <img src={Logo} className='img-fluid' alt="" />
               <div>
                  <h3 className="name">Nothin</h3>
                  <p className="views"><span>@NothingTechnology</span>  526K Subscribers  122 Videos</p>
                  
               </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Channel
