import React from 'react';

function ViewCount({ count }) {
  const formatCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M Views`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K Views`;
    } else {
      return `${count} Views`;
    }
  };

  return <p className='views'>{formatCount(count)}</p>;
}

export default ViewCount;
