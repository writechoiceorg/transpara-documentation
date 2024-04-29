import React from 'react';
import CardList from './CardList';

const Card = ({ logo, name, linkTo }) => {
  return (
    <a className="link_card" href={linkTo}>
      {logo && <img src={`../../../img/setup-adm/interfaces/icons/${logo}.png`} className="icon_img" alt={name} /> }
      <h3>{name}</h3>
    </a>
  );
};

const LinkCards = ({ data, numColumns  }) => {
  return <CardList data={data} numColumns={numColumns} Card={Card} className={"link_cards_container"} />;
};

export default LinkCards;
