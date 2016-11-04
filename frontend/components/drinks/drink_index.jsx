import React from 'react';
import DrinkIndexItem from './drink_index_item';
import DrinkForm from './drink_form';

class DrinkIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDrinks();
  }

  render () {
    return (
      <div className="drink-index">
        <ul>
          {
            this.props.drinks.map(drink => (
              <DrinkIndexItem
                key={drink.id}
                deleteDrink={this.props.deleteDrink}
                drink={drink} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default DrinkIndex;
