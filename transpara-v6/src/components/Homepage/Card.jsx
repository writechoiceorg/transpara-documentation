import React from 'react';
import HomeBtn from '../buttons/HomeBtn';

export default function Card({ card, className }) {
  return (
    <a className={className} href={card.route}>
      <div className={`card_image ${card.imageClass}`}>
      </div>
      <div className="card_text">
        <h4 className='cardTitle'>{card.title}</h4>
        <p>{card.content}</p>
        {/* <a href="">Get Started</a> */}
      </div>
    </a>
  );
}
