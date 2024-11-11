import React from 'react';

const VideoPlayer = ({ src, wSize }) => {
  const videoStyles = {
    width: wSize || '100%',
    margin: '0 0 var(--ifm-paragraph-margin-bottom)',
    borderRadius: '7px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div>
      <video style={videoStyles} controls autoPlay>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
