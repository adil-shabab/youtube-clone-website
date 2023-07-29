import React from 'react'
import './css/Feed.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Explore from '../../components/explore/Explore'
import VedioCard from '../../components/vediocard/VedioCard'
import Thumbnail1 from './img/sample-thumbnail.png'   // to remove
import Channel1 from './img/sample-channel.jpg'       // to remove
import Thumbnail2 from './img/sample-thumbnail-2.png'   // to remove
import Channel2 from './img/sample-channel-2.jpg'       // to remove

function Feed() {
  

  let array = [
    {img: Thumbnail1, title: 'King of Kotha - Kalapakkaara Lyric Video | Dulquer Salmaan | Abhilash Joshiy | Jakes Bejoy', channel: Channel1, views: '2.5M views . 1 day ago ', channelName: 'Sony Music South'},
    {img: Thumbnail2, title: 'Halaballoo - Video Song | RDX | Shane Nigam,Antony Varghese, Neeraj Madhav | Nahas Hidhayath', channel: Channel2, views: '1.2M views . 15 hours ago ', channelName: 'Saregama Malayalam'},
  ]

  return (
    <div className='feed_container'>
      <div className="row">
        <div className="col-md-2">
          <Sidebar/>
        </div>
        <div className="col-md-10">
          <Explore />

          <div className='row'>
            <di className="col-md-4">
              <VedioCard video={array[0]} />
            </di>
            <di className="col-md-4">
              <VedioCard video={array[1]} />
            </di>
            <di className="col-md-4">
              <VedioCard video={array[0]} />
            </di>
            <di className="col-md-4">
              <VedioCard video={array[0]} />
            </di>
            <di className="col-md-4">
              <VedioCard video={array[1]} />
            </di>
            <di className="col-md-4">
              <VedioCard video={array[0]} />
            </di>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
