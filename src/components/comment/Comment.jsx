import React, {useState, useEffect} from 'react';
import Like from '../../pages/vedio/img/like.png'; // Replace with the actual path
import Dislike from '../../pages/vedio/img/dislike.png'; // Replace with the actual path
import './css/style.css'




const Comment = ({ profileImage, username, date, text, likeCount }) => {


  const formattedText = text.replace(/<br\s*\/?>/g, '\n');
  


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
    <div className="comment">
      <img className='profile img-fluid' src={profileImage} alt="" />
      <div className="txt_area">
        <p className="username">{username}<span className="date">{time}</span></p>
        <p className="txt" dangerouslySetInnerHTML={{ __html: formattedText }} />
        <div className="like">
          <img src={Like} alt="" className="like_icon img-fluid" />
          <span className="like_count">{likeCount}</span>
          <img src={Dislike} alt="" className="dislike_icon img-fluid" />
          <span className='reply'>Reply</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
