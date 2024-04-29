import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function StylizedImage({ imgURL, wSize, alt }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src={useBaseUrl(imgURL)}
        alt={alt}
        style={{
          maxWidth: wSize,
          margin: '0 0 var(--ifm-paragraph-margin-bottom)',
          borderRadius: '7px', 
          boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)', 
        }}
      />
    </div>
  );
}