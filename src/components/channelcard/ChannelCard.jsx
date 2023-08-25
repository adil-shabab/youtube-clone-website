import React from 'react'
import {Link} from 'react-router-dom'
import './css/style.css'
import TimeAgo from '../../utlis/TimeAgo'

function ChannelCard({item}) {
  return (
    <Link className='link' to={`/channel/${item.id.channelId}`}>
    <div className="vedio_card channel_card">
      <div className="img_section">
        <img
          src={item.snippet.thumbnails.high.url}
          className="img-fluid channel_thumbnail"
          alt=""
        />
      </div>

      <h6 className="title">{item.snippet.title}</h6>
      <TimeAgo date={new Date(item.snippet.publishTime)} />
      <button className="subscribe_btn me-0">Subscribe</button>
      
    </div>
    </Link>
  )
}

export default ChannelCard
