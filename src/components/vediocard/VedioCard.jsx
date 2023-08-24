import React from 'react';
import './css/VedioCard.css';
import TimeAgo from '../../utlis/TimeAgo'; 
import Profile from '../../assets/img/profile.jpg';
import { Link } from 'react-router-dom';

function VedioCard({ video, channel, logo }) {
  const truncatedText = video.snippet.title
    .split(' ')
    .slice(0, 13)
    .join(' ');

  const ellipsis =
    video.snippet.title.split(/\s+/).filter((word) => word !== '').length > 13
      ? ' ...'
      : '';

  return (
    <Link className='link' to={`/video/${video.id.videoId}`}>
    <div className="vedio_card">
      <div className="img_section">
        <img
          src={video.snippet.thumbnails.high.url}
          className="img-fluid thumbnail"
          alt=""
        />
      </div>
      <div className="d-flex">
        {channel ? 
          <img src={logo} alt="" className="channel_img img-fluid" />
          :
          <img src={Profile} alt="" className="channel_img img-fluid" />
        }
        <div>
          <h4 className="title">
            {truncatedText}
            {ellipsis}
          </h4>
          <h6 className="channel_name">{video?.snippet.channelTitle}</h6>
          <TimeAgo date={new Date(video.snippet.publishTime)} />
        </div>
      </div>
    </div>
    </Link>
  );
}

export default VedioCard;
