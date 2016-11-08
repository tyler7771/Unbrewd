import React from 'react';
import { Link, hashHistory } from 'react-router';

class RatingIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  checked (value) {
    if (value === this.props.rating.rating) {
      return "checked";
    } else {
      return "";
    }
  }

  description() {
    if (this.props.rating.description) {
      debugger
      return (
        <p className="drink-index-description">
          <span>Description: </span>{this.propsrating.description}
        </p>
      );
    }
  }

  render () {
    let rating = this.props.rating;
    return (
      <li className="drink-index-item">
        <div className="drink-index-text">
          <p className="drink-index-roast-type">
            {rating.user.username}<span> is drinking a</span>
          </p>
          <Link to={`/coffee/${rating.drink.id}`}>
            <h2 className="drink-index-title">{rating.drink.name}</h2>
          </Link>
          <form id="ratingsForm">
            <div className="beans-rating">
              <input type="radio" name="bean" value="1" readOnly
                className="bean-1" id="bean-1" checked={this.checked(1)}/>
              <label className="bean-1" htmlFor="bean-1">1</label>
              <input type="radio" name="bean" value="2" readOnly
                className="bean-2" id="bean-2" checked={this.checked(2)}/>
              <label className="bean-2" htmlFor="bean-2">2</label>
              <input type="radio" name="bean" value="3" readOnly
                className="bean-3" id="bean-3" checked={this.checked(3)}/>
              <label className="bean-3" htmlFor="bean-3">3</label>
              <input type="radio" name="bean" value="4" readOnly
                className="bean-4" id="bean-4" checked={this.checked(4)}/>
              <label className="bean-4" htmlFor="bean-4">4</label>
              <input type="radio" name="bean" value="5" readOnly
                className="bean-5" id="bean-5" checked={this.checked(5)}/>
              <label className="bean-5" htmlFor="bean-5">5</label>
              <span></span>
            </div>
          </form>
          {this.description}
        </div>
        <img className="drink-index-image" src={rating.picture_url} />
    </  li>
  );
  }
}

export default RatingIndexItem;
