import React from 'react'
import './css/VedioCard.css'


function VedioCard({video}) {
  let words = video.title.split(' ');
  let truncatedText = words.slice(0, 13).join(' ');
  let ellipsis;
  console.log(video.title.length)
  if(video.title.split(/\s+/).filter(word => word !== '').length > 13){
    ellipsis = words.length > 13 ? ' ...' : ''
  }else{
    ellipsis = ""
  }

  return (
    <div className="vedio_card">
        <div className="img_section">
          <img src={video.img} className='img-fluid thumbnail' alt="" />
          <p className='time'>11:30</p>
        </div>
        <div className="d-flex">
          <img src={video.channel} alt="" className="channel_img img-fluid" />
          <div>
            <h4 className="title">{truncatedText}{ellipsis}</h4>
            <h6 className="channel_name">{video.channelName}</h6>
            <p className="views">{video.views}</p>
          </div>
        </div>
    </div>
  )
}

export default VedioCard
