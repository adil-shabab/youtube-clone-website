import React from 'react';

function ViewCount({ count, txt, indicator }) {
  const formatCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    } else {
      return `${count}`;
    }
  };

  return <p className={`views ${indicator}`}>{formatCount(count)} {txt}</p>;
}

export default ViewCount;
