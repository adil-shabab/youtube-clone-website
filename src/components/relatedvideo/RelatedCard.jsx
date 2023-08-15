import React from 'react';
import './css/style.css';

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substr(0, maxLength) + '...';
  }
  return text;
}

function RelatedCard({ thumbnailSrc, videoTitle, channelName, views, date }) {
  const truncatedVideoTitle = truncateText(videoTitle, 50);

  return (
    <div className="video_card">
      <img src={thumbnailSrc} alt="" className="thumbnail img-fluid" />
      <div className="txt_area">
        <h4 className="video_title">{truncatedVideoTitle}</h4>
        <p className="channel_name">{channelName}</p>
        <p className="views">{views} views <span className="date">{date}</span></p>
      </div>
    </div>
  );
}

export default RelatedCard;
