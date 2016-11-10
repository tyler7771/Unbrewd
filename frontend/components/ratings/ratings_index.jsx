import React from 'react';
import RatingIndexItem from './rating_index_item';
import { sortBy } from "lodash";

class RatingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRatings({amount: 20});
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
    debugger
    return (
      <div className="rating-index">
        <div className="finding-drinks">
            <h1>Recent Global Activity</h1>
            <h2>Check out what others have to say about our coffees!</h2>
        </div>
        <ul>
            {
              this.props.ratings.map(rating => (
                <RatingIndexItem
                  key={rating.id}
                  rating={rating}
                  deleteRating={this.props.deleteRating}
                  currentUser={this.props.currentUser}/>
              ))
            }
          </ul>
      </div>
    );
  }
}

export default RatingIndex;
