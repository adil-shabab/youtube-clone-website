import React from 'react';

const TimeAgo = ({ date }) => {
  const seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return <p className='time_'>{Math.floor(interval)} years ago</p>;
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return <p className='time_'>{Math.floor(interval)} months ago</p>;
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return <p className='time_'>{Math.floor(interval)} days ago</p>;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return <p className='time_'>{Math.floor(interval)} hours ago</p>;
  }
  interval = seconds / 60;
  if (interval > 1) {
    return <p className='time_'>{Math.floor(interval)} minutes ago</p>;
  }
  return <p className='time_'>{Math.floor(seconds)} seconds ago</p>;
};

export default TimeAgo;
