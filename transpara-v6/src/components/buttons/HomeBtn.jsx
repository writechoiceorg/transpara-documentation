import React from 'react';
// import { ArrowRight } from '@phosphor-icons/react';

export default function HomeBtn({ text, btnClass, route }) {
  return (
    <a className={btnClass} href={route}>
      <h4>{text}</h4>
      {/* <ArrowRight size={16} /> */}
    </a>
  );
}
