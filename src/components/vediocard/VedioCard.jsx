import React, { useState, useEffect } from 'react';
import './css/VedioCard.css';
import { FetchFromAPI } from '../../api/FetchFromAPI';

function VedioCard({ video }) {
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelDetails, setChannelDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    FetchFromAPI(`videos?part=snippet,statistics&id=${video.id.videoId}`)
      .then((data) => {
        setVideoDetails(data.items[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [video]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    FetchFromAPI(`channels?part=snippet,statistics&id=${video.snippet.channelId}`)
      .then((data) => {
        setChannelDetails(data.items[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [video]);

  let words = video.snippet.title.split(' ');
  let truncatedText = words.slice(0, 13).join(' ');
  let ellipsis;
  if (video.snippet.title.split(/\s+/).filter(word => word !== '').length > 13) {
    ellipsis = words.length > 13 ? ' ...' : '';
  } else {
    ellipsis = '';
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="vedio_card">
      <div className="img_section">
        <img src={video.snippet.thumbnails.high.url} className='img-fluid thumbnail' alt="" />
        <p className='time'>11:30</p>
      </div>
      <div className="d-flex">
        <img src={channelDetails?.snippet.thumbnails.medium.url} alt="" className="channel_img img-fluid" />
        <div>
          <h4 className="title">{truncatedText}{ellipsis}</h4>
          <h6 className="channel_name">{channelDetails?.snippet.title}</h6>
          <p className="views">{videoDetails?.statistics.viewCount}</p>
        </div>
      </div>
    </div>
  );
}

export default VedioCard;
