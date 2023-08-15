import React, { useContext } from 'react'
import './css/Channel.css'
import MyContext from '../../context/MyContext'
import Sidebar from '../../components/sidebar/Sidebar'
import Bg from './img/bg.png'
import Logo from './img/logo.jpg'
import VedioCard from '../../components/vediocard/VedioCard'
import Thumbnail1 from '../../components/vediocard/img/sample-thumbnail.png'   // to remove
import Channel1 from '../../components/vediocard/img/sample-channel.jpg'       // to remove
import Thumbnail2 from '../../components/vediocard/img/sample-thumbnail-2.png'   // to remove
import Channel2 from '../../components/vediocard/img/sample-channel-2.jpg'       // to remove

function Channel() {

  const {showMenu, setShowMenu} = useContext(MyContext)

  let array = [
    {img: Thumbnail1, title: 'King of Kotha - Kalapakkaara Lyric Video | Dulquer Salmaan | Abhilash Joshiy | Jakes Bejoy', channel: Channel1, views: '2.5M views . 1 day ago ', channelName: 'Sony Music South'},
    {img: Thumbnail2, title: 'Halaballoo - Video Song | RDX | Shane Nigam,Antony Varghese, Neeraj Madhav | Nahas Hidhayath', channel: Channel2, views: '1.2M views . 15 hours ago ', channelName: 'Saregama Malayalam'},
  ]



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
        
        <img src={Bg} className='bg_channel mt-2 img-fluid' />

        <div className="row">
          <div className="col-lg-10">
            <div className="channel_details">
               <img src={Logo} className='img-fluid logo_img' alt="" />
                <div className='ms-4 d-flex flex-column justify-content-center'>
                  <h3 className="name">Nothing</h3>
                  <p className="d-sm-none d-block views"><span>@NothingTechnology</span></p>
                  <p className="views d-sm-block d-none"><span>@NothingTechnology</span>  526K Subscribers  122 Videos</p>
                  <p className="d-sm-block d-none description">Building a world where tech is fully powerful</p>
                  <button className="mt-2 d-lg-none d-block subscribe_btn">Subscribe</button>
                </div>
            </div>
            <div className=' d-sm-none d-block mt-4'>
              <p className="text-color mb-1"><span>  526K Subscribers  122 Videos </span></p>
              <p className="text-color mb-1">Building a world where tech is fully powerful</p>
            </div>
          </div>
          <div className="col-lg-2 d-lg-flex d-none justify-content-end align-items-center">
            <button className="subscribe_btn">Subscribe</button>
          </div>
        </div>


        <div className='row mt-4'>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xsm-12">
            <VedioCard video={array[0]} />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xsm-12">
            <VedioCard video={array[1]} />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xsm-12">
            <VedioCard video={array[0]} />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xsm-12">
            <VedioCard video={array[0]} />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xsm-12">
            <VedioCard video={array[1]} />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xsm-12">
            <VedioCard video={array[0]} />
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Channel
