import React from 'react';

const IframeComponent = ({ src, wSize, hSize }) => {
  const iframeStyles = {
    width: wSize || '100%',
    height: hSize || '400px',
    margin: '0 0 var(--ifm-paragraph-margin-bottom)',
    borderRadius: '7px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        src={src}
        style={iframeStyles}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
};

export default IframeComponent;
