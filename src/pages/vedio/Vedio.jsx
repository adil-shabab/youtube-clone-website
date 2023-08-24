import React, {useState, useEffect, useContext} from 'react'
import Like from './img/like.png'
import Share from './img/share.png'
import Download from './img/download.png'
import SunTV from './img/sun-tv.jpg'
import './css/Vedio.css'
import Description from '../../components/description/Description'
import Comment from '../../components/comment/Comment'
import Profile from './img/profile.jpg'
import Profile2 from './img/profile-2.jpg'
import Profile3 from './img/profile-3.jpg'
import Profile4 from './img/profile-4.jpg'
import Profile5 from './img/profile-5.jpg'

import Thumbnail1 from './img/thumbnail1.webp'
import Thumbnail2 from './img/thumbnail2.webp'
import Thumbnail3 from './img/thumbnail3.webp'
import Thumbnail4 from './img/thumbnail4.webp'
import Thumbnail5 from './img/thumbnail5.webp'
import Thumbnail6 from './img/thumbnail6.webp'
import RelatedCard from '../../components/relatedvideo/RelatedCard'



import Thumbnails1 from '../feed/img/sample-thumbnail.png'   // to remove
import Channel1 from '../feed/img/sample-channel.jpg'       // to remove
import Thumbnails2 from '../feed/img/sample-thumbnail-2.png'   // to remove
import Channel2 from '../feed/img/sample-channel-2.jpg'       // to remove
import VedioCard from '../../components/vediocard/VedioCard'
import ViewCount from '../../utlis/ViewCount'

import { FetchFromAPI } from '../../api/FetchFromAPI'
import { useParams, Link } from 'react-router-dom'
import TimeAgo from '../../utlis/TimeAgo'
import Sidebar from '../../components/sidebar/Sidebar'
import MyContext from '../../context/MyContext'



function Vedio() {

  const { id } = useParams();


  const {isSidebarActive, setIsSidebarActive} = useContext(MyContext)



  const [isMobile, setIsMobile] = useState(false);
  const [videoDetails, setVideoDetails] = useState([]);
  const [channelDetails, setChannelDetails] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [comments, setComments] = useState([]);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    // Initial check and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleComments = () => {
    setIsMobile(!isMobile);
  };


  useEffect(() => {
    FetchFromAPI(`videos?id=${id}&part=contentDetails,snippet,statistics`)
      .then((data) => {
        setVideoDetails(data.items[0]); // Assuming data contains video details
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching video details:', error);
      });
  }, [id]);


  useEffect(() => {
    FetchFromAPI(`channels?id=${videoDetails?.snippet?.channelId}&part=snippet,statistics`)
      .then((data) => {
        setChannelDetails(data.items[0]); // Assuming data contains video details
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching video details:', error);
      });
  }, [videoDetails]);


  useEffect(() => {
    FetchFromAPI(`commentThreads?videoId=${id}&part=snippet`)
      .then((data) => {
        setComments(data.items); // Assuming data contains comment details
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching video details:', error);
      });
  }, [id]);


  useEffect(() => {
    FetchFromAPI(`search?part=id,snippet&q=New malayalam Movie`)
    .then((data) => {
      console.log(data)
      setRelatedVideos(data.items)
    })
  }, [id]);





  let array = [
    {img: Thumbnails1, title: 'King of Kotha - Kalapakkaara Lyric Video | Dulquer Salmaan | Abhilash Joshiy | Jakes Bejoy', channel: Channel1, views: '2.5M views . 1 day ago ', channelName: 'Sony Music South'},
    {img: Thumbnails2, title: 'Halaballoo - Video Song | RDX | Shane Nigam,Antony Varghese, Neeraj Madhav | Nahas Hidhayath', channel: Channel2, views: '1.2M views . 15 hours ago ', channelName: 'Saregama Malayalam'},
  ]



  return (
    <div className='feed_container'>
      <div className="content px-lg-5">
        <div className="video_details row w-100 px-lg-5 mt-md-3">
          <div className="col-lg-8">


          <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            ></iframe>
          </div>
        

          <h2 className="vedio_title">{videoDetails?.snippet?.title}</h2>
            <div className="row channel_detail_section">
              <div className="col-md-6 channel_main_details">
                <Link className='link' to={`/channel/${videoDetails?.snippet?.channelId}`}>
                <img src={channelDetails?.snippet?.thumbnails?.default?.url} className='channel_img img-fluid' alt="" />
                </Link>
                <Link className='link' to={`/channel/${videoDetails?.snippet?.channelId}`}>
                <div className="channel ms-2">
                  <h5 className="channel_title">{channelDetails?.brandingSettings?.channel?.title}</h5>
                  <p className="subscribers">
                   <ViewCount indicator="" txt="Subscribers" count={channelDetails?.statistics?.subscriberCount} />
                  </p>
                </div>
                </Link>
                <button className="subscribe_btn">Subscribe</button>
              </div>
              <div className="col-md-6 video_detail">
                <div className="sm_box">
                  <img src={Like} className='img-fluid' alt="" />
                  <p className='txt ms-0'>
                    <ViewCount indicator="" txt="" count={videoDetails?.statistics?.likeCount} />
                  </p>
                </div>
                <div className="sm_box">
                  <img src={Share} alt="" className="img-fluid" />
                  <p className="txt">Share</p>
                </div>
                <div className="sm_box">
                  <img src={Download} alt="" className="img-fluid" />
                  <p className="txt">Download</p>
                </div>
              </div>
            </div>


            <div className="video_description">
              <div className="d-flex detail_flex">
                <ViewCount count={videoDetails?.statistics?.viewCount} indicator="view_time" txt="views" />
                <TimeAgo date={new Date(videoDetails?.snippet?.publishedAt)} />
              </div>
              <Description
              txt = {videoDetails?.snippet?.description}
              />
            </div>



            {isMobile && 
              <div onClick={toggleComments} className="view_comment_btn">View Comments ({videoDetails?.statistics?.commentCount})</div>
            }
            
            {!isMobile && 
              <div onClick={toggleComments} className="d-md-none d-block view_comment_btn">Hide Comments</div>
            }


            

            {!isMobile && 

            <div className="video_comments">
              <p className="comment_count">{videoDetails?.statistics?.commentCount} Comments</p>


              {comments?.map((item)=>{
                return (
                    <Comment
                      profileImage={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
                      username={item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                      date={item?.snippet?.topLevelComment?.snippet?.updatedAt}
                      text={item?.snippet?.topLevelComment?.snippet?.textDisplay}
                      likeCount={item?.snippet?.topLevelComment?.snippet?.likeCount}
                    />
                )
              })}

            </div>

            }

            
          </div>


          
          <div className="col-lg-4 d-md-block d-none">
            <div className="related_videos">
              


            {relatedVideos.map((item)=>{
              return(
                <RelatedCard
                thumbnailSrc={item?.snippet?.thumbnails?.medium?.url}
                videoTitle={item?.snippet?.description}
                channelName={item?.snippet?.channelTitle}
                date={item?.snippet?.publishedAt}
                id={item?.id?.videoId}
                />
              )
            })}
          </div>
        </div>


        </div>
      </div>



      {isSidebarActive &&
        <Sidebar />
      }

    </div>
  )
}


export default Vedio
