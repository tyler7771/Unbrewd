import React from 'react';
import { Link, hashHistory } from 'react-router';

const DrinkIndexItem = ({ drink, router }) => (
  <Link to={`/coffee/${drink.id}`}>
    <li className="drink-index-item">
      <div className="drink-index-text">
        <h2 className="drink-index-title">{drink.name}</h2>
        <p className="drink-index-roaster">
          <span>Roaster: </span>{drink.roaster.name}
        </p>
        <p className="drink-index-roast-type">
          <span>Roast Type: </span>{drink.roast_type}
        </p>
        <p className="drink-index-description">
          <span>Description: </span>{drink.description}
        </p>
      </div>
      <img className="drink-index-image" src={drink.roaster.picture_url} />
  </  li>
</Link>
);

export default DrinkIndexItem;
