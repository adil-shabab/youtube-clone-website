import React,{useState, useEffect} from 'react';
import './css/style.css';
import { Link } from 'react-router-dom';


function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substr(0, maxLength) + '...';
  }
  return text;
}

function RelatedCard({ thumbnailSrc, videoTitle, channelName, date, id }) {
  const truncatedVideoTitle = truncateText(videoTitle, 50);



  

  const [time, setTime] = useState();


    
  function getTime(date) {
    const commentDate = new Date(date); // Parse the ISO 8601 date string
    const seconds = Math.floor((new Date().valueOf() - commentDate.valueOf()) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) {
      setTime(`${Math.floor(interval)} years ago`);
      return;
    }
    
    interval = seconds / 2592000;
    if (interval > 1) {
      setTime(`${Math.floor(interval)} months ago`);
      return;
    }
    
    interval = seconds / 86400;
    if (interval > 1) {
      setTime(`${Math.floor(interval)} days ago`);
      return;
    }
    
    interval = seconds / 3600;
    if (interval > 1) {
      setTime(`${Math.floor(interval)} hours ago`);
      return;
    }
    
    interval = seconds / 60;
    if (interval > 1) {
      setTime(`${Math.floor(interval)} minutes ago`);
      return;
    }
    
    setTime(`${Math.floor(interval)} seconds ago`);
  }


  useEffect(() => {
    getTime(date)
  }, [date]);

  return (
    <Link className='link' to={`/video/${id}`}>
    <div className="video_card">
      <img src={thumbnailSrc} alt="" className="thumbnail img-fluid" />
      <div className="txt_area">
        <h4 className="video_title">{truncatedVideoTitle}</h4>
        <p className="channel_name">{channelName}</p>
        <p className="views">{time}</p>
      </div>
    </div>
    </Link>
  );
}

export default RelatedCard;
