import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function PngFont({name}) {
  return (
    <span>
      <img src={useBaseUrl(`img/icons/designer/${name}.png`)} alt={`${name} icon`} style={{ display: 'inline', height: '18px', width: '18px' }} />
    </span>
  );
}