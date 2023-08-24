import React, { useContext, useState, useEffect } from 'react'
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
import { useParams } from 'react-router-dom'
import { FetchFromAPI } from '../../api/FetchFromAPI'
import ViewCount from '../../utlis/ViewCount'

function Channel() {

  const { id } = useParams();

  const {showMenu, setShowMenu} = useContext(MyContext)

  const [channelDetails, setChannelDetails] = useState([]);
  const [channelVideos, setChannelVideos] = useState([]);

  let array = [
    {img: Thumbnail1, title: 'King of Kotha - Kalapakkaara Lyric Video | Dulquer Salmaan | Abhilash Joshiy | Jakes Bejoy', channel: Channel1, views: '2.5M views . 1 day ago ', channelName: 'Sony Music South'},
    {img: Thumbnail2, title: 'Halaballoo - Video Song | RDX | Shane Nigam,Antony Varghese, Neeraj Madhav | Nahas Hidhayath', channel: Channel2, views: '1.2M views . 15 hours ago ', channelName: 'Saregama Malayalam'},
  ]


  useEffect(() => {
    FetchFromAPI(`channels?id=${id}&part=contentDetails,snippet,statistics`)
      .then((data) => {
        setChannelDetails(data.items[0]); // Assuming data contains video details
        console.log(data)
      })
      .catch((error) => {
        console.log('Error fetching channel details:', error);
      });
  }, [id]);


  useEffect(() => {
    FetchFromAPI(`search?channelId=${id}&part=id,snippet&order=date`)
      .then((data) => {
        setChannelVideos(data.items); // Assuming data contains video details
        console.log(data)
      })
      .catch((error) => {
        console.log('Error fetching channel videos:', error);
      });
  }, [id]);




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
        
        <img src={channelDetails?.brandingSettings?.image?.bannerExternalUrl} className='bg_channel mt-2 img-fluid' />

        <div className="row">
          <div className="col-lg-10">
            <div className="channel_details">
               <img src={channelDetails?.snippet?.thumbnails?.high?.url} className='img-fluid logo_img' alt="" />
                <div className='ms-4 d-flex flex-column justify-content-center'>
                  <h3 className="name">{channelDetails?.brandingSettings?.channel?.title}</h3>
                  <p className="d-sm-none d-block views"><span>{channelDetails?.snippet?.customUrl}</span></p>
                  <p className="views d-sm-flex d-none"><span>{channelDetails?.snippet?.customUrl}</span>  <ViewCount count={channelDetails?.statistics?.subscriberCount} txt="Subscribers" indicator="ms-3" /> <ViewCount count={channelDetails?.statistics?.videoCount} txt="Videos" indicator="ms-3" /> </p>
                  <p className="d-sm-block d-none description">{channelDetails?.snippet?.description}</p>
                  <button className="mt-2 d-lg-none d-block subscribe_btn">Subscribe</button>
                </div>
            </div>
            <div className=' d-sm-none d-block mt-4'>
              <p className="text-color mb-1 d-flex"><ViewCount count={channelDetails?.statistics?.subscriberCount} txt="Subscribers" indicator="ms-3" /> <ViewCount count={channelDetails?.statistics?.videoCount} txt="Videos" indicator="ms-3" /> </p>
              <p className="text-color mb-1">{channelDetails?.snippet?.description}</p>
            </div>
          </div>
          <div className="col-lg-2 d-lg-flex d-none justify-content-end align-items-center">
            <button className="subscribe_btn">Subscribe</button>
          </div>
        </div>


        <div className='row mt-4'>
          {channelVideos?.map((item)=>{
            return(
              <div className="col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                <VedioCard video={item} channel={true} logo={channelDetails?.snippet?.thumbnails?.high?.url} />
              </div>
            )
          })}
        </div>

        
      </div>
    </div>
  </div>
  )
}

export default Channel
