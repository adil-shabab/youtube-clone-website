import React from 'react';
import Like from '../../pages/vedio/img/like.png'; // Replace with the actual path
import Dislike from '../../pages/vedio/img/dislike.png'; // Replace with the actual path
import './css/style.css'

const Comment = ({ profileImage, username, date, text, likeCount }) => {
  return (
    <div className="comment">
      <img className='profile img-fluid' src={profileImage} alt="" />
      <div className="txt_area">
        <p className="username">{username}<span className="date">{date}</span></p>
        <p className="txt">{text}</p>
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
