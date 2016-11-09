import React from 'react';
import RatingIndexItem from './rating_index_item';
import { sortBy } from "lodash";

class RatingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRatings();
  }

  sortedItems(){
    let order = this.state.sortOrder;
    let sorted = this.props.ratings.sort(function(a, b) {
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
      <div className="rating-index">
        <ul>
            {
              this.props.ratings.map(rating => (
                <RatingIndexItem
                  key={rating.id}
                  rating={rating} />
              ))
            }
          </ul>
      </div>
    );
  }
}

export default RatingIndex;


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
