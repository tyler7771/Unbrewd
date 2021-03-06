import React from 'react';
import DrinkIndexItem from './drink_index_item';
import DrinkForm from './drink_form';
import { sortBy } from "lodash";
import SidebarStatsContainer from '../profiles/sidebar_stats_container';

class DrinkIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillReceiveProps(newProps) {
  //   newProps.fetchDrinks();
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    return (
      <div className="drink-index">
        <SidebarStatsContainer/>
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
//   <h3>Sort by: </h3>
//   <div className="select-style">
//     <select
//       className="coffee-sort">
//       <option value="name">Coffee Name A-Z</option>
//       <option value="name">Coffee Name Z-A</option>
//       <option value="Medium-Light">Roaster A-Z</option>
//       <option value="Medium-Light">Roaster Z-A</option>
//       <option value="roast_type">Roast Type</option>
//     </select>
//   </div>
// </div>
