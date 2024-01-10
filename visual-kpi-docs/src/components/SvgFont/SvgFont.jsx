import React, { useEffect, useState } from 'react';

export default function SvgFont({ data, position, size }) {
  const [path, setPath] = useState('');

  useEffect(() => {
    const path = data.icon.paths.reduce((acc, curr) => acc + ` ${curr}`, '');
    setPath(path);
  }, []);

  return (
    <span className="svg_container">
      <svg className="hidesvg" version="1.1" xmlns="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id={data.properties.name} width={size} viewBox={`0 0 ${position || "1024 1024"}`}>
            <title>test</title>
            <path className="path1" d={path}></path>
          </symbol>
        </defs>
      </svg>
      <svg className="icon"><use href={`#${data.properties.name}`}></use></svg>
    </span>  
  )
}
