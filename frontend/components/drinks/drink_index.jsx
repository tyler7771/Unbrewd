import React from 'react';
import DrinkIndexItem from './drink_index_item';
import DrinkForm from './drink_form';
import { sortBy } from "lodash";

class DrinkIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {sortOrder: "roaster.id"};
  }

  componentDidMount() {
    this.props.fetchDrinks();
  }

  sortedItems(){
    let order = this.state.sortOrder;
    let sorted = this.props.drinks.sort(function(a, b) {
        return a[order] > b[order];
      });
      debugger
    return sorted;
  }

  render () {
    // let drinkIndex = this.sortedItems();
    return (
      <div className="drink-index">
        <h1>All Our Coffees!</h1>
        <span>Don't see your favorite coffee?</span> <a href="/#/new">Add it to our list!</a>
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
