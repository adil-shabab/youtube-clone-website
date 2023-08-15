import React, { useState } from 'react';

const Description = ({ txt }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const lines = txt.split('\n');

  return (
    <div>
      {lines.map((line, index) => (
        <p key={index} className="desc">
          {showFullDescription || index < 1 ? line : null}
        </p>
      ))}
      {lines.length > 1 && (
        <span className="toggle" onClick={toggleDescription}>
          {showFullDescription ? ' Show less' : ' Show more'}
        </span>
      )}
    </div>
  );
};

export default Description;
