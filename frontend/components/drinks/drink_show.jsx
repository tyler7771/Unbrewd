import React from 'react';
import { Link } from 'react-router';

class DrinkShow extends React.Component {
  componentDidMount() {
    this.props.fetchDrink(this.props.params.drinkId);
  }

  render () {
    const drink = this.props.drink;
    if (!drink) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <img className="drink-index-image" src={drink.roaster.picture_url} />
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
      </div>
    );
  }
}

export default DrinkShow;
