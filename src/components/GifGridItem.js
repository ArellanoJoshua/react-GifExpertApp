import React from 'react';

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn animate__delay-0.8s">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
