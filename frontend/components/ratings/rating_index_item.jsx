import React from 'react';
import { Link, hashHistory } from 'react-router';

const RatingIndexItem = ({ rating, router }) => (
  <Link to={`/coffee/${rating.drink.id}`}>
    <li className="drink-index-item">
      <div className="drink-index-text">
        <h2 className="drink-index-title">{rating.drink.name}</h2>
        <p className="drink-index-roast-type">
          <span>Reviewer: </span>{rating.user.username}
        </p>
        <p className="drink-index-description">
          <span>Description: </span>{rating.description}
        </p>
      </div>
      <img className="drink-index-image" src={rating.picture_url} />
  </  li>
</Link>
);

export default RatingIndexItem;
