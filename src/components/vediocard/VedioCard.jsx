import React from 'react';
import './css/VedioCard.css';
import TimeAgo from '../../utlis/TimeAgo'; 
import Profile from '../../assets/img/profile.jpg';

function VedioCard({ video }) {
  const truncatedText = video.snippet.title
    .split(' ')
    .slice(0, 13)
    .join(' ');

  const ellipsis =
    video.snippet.title.split(/\s+/).filter((word) => word !== '').length > 13
      ? ' ...'
      : '';

  return (
    <div className="vedio_card">
      <div className="img_section">
        <img
          src={video.snippet.thumbnails.high.url}
          className="img-fluid thumbnail"
          alt=""
        />
        <p className="time">11:30</p>
      </div>
      <div className="d-flex">
        <img src={Profile} alt="" className="channel_img img-fluid" />
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
  );
}

export default VedioCard;
