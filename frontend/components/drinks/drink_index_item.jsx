import React from 'react';
import { Link, hashHistory } from 'react-router';

const DrinkIndexItem = ({ drink, router }) => (
  <li className="drink-index-item">
    <Link to={`/drinks/${drink.id}`}>
      <h2 className="drink-index-title">{drink.name}</h2>
      <h3 className="drink-index-roaster">{drink.roaster.name}</h3>
      <h3 className="drink-index-roast-type">{drink.roast_type}</h3>
      <img className="drink-index-image" src={drink.picture_url} />
    </Link>
  </li>
);

export default DrinkIndexItem;
