import React from 'react';
import DrinkIndexItem from './drink_index_item';
import DrinkForm from './drink_form';
import { sortBy } from "lodash";

class DrinkIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDrinks();
  }

  sortedItems(){
    let order = this.state.sortOrder;
    let sorted = this.props.drinks.sort(function(a, b) {
        if (a[order] < b[order]) {
          return -1;
        } else {
          return 1;
        }
      });
    return sorted;
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {

    return (
      <div className="drink-index">
        <div className="finding-drinks">
          <h1>All Our Coffees!</h1>
          <h2>Check out our awesome list of coffees! Click on any coffee
          that you like to get details and ratings on that coffee!</h2>

        <span>Don't see your favorite coffee? &nbsp;
            <a href="/#/new">Add it to our list!</a>
        </span>

        </div>
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


// <div className="sort">
//   <h2>Sort by: </h2>
//   <div className="select-style">
//     <select
//       className="coffee-sort"
//       value={this.state.sortOrder}
//       onChange={this.update("sortOrder")}>
//       <option value="name">Coffee Name A-Z</option>
//       <option value="name">Coffee Name Z-A</option>
//       <option value="Medium-Light">Roaster A-Z</option>
//       <option value="Medium-Light">Roaster Z-A</option>
//       <option value="roast_type">Roast Type</option>
//       <option value="Medium">Highest Rated</option>
//     </select>
//   </div>
// </div>
//
