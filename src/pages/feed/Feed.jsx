import React,{useContext, useEffect, useState} from 'react'
import './css/Feed.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Explore from '../../components/explore/Explore'
import VedioCard from '../../components/vediocard/VedioCard'
import MyContext from '../../context/MyContext'
import { FetchFromAPI } from '../../api/FetchFromAPI'
import ChannelCard from '../../components/channelcard/ChannelCard'



function Feed() {

  const {showMenu, setShowMenu, selectedItem} = useContext(MyContext)
  const [videos, setVideos] = useState([]);


  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${selectedItem}`)
    .then((data) => {
      setVideos(data.items)
    })
  }, [selectedItem]);




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
          <Explore />

          <div className='row'>
          
          {videos.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-6 col-xsm-12" key={item.id}>
                {item.id.kind === "youtube#channel" ? (
                  <ChannelCard item={item} />
                ) : (
                  <VedioCard video={item} />
                )}
              </div>
            );
          })}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
