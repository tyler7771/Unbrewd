import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import RatingUpdateModalContainer from './rating_update_modal_container';

class RatingIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { updateModalIsOpen: false};
  }

  checked (value) {
    if (value === this.props.rating.checkin_rating) {
      return "checked";
    } else {
      return "";
    }
  }

  openUpdateModal() {
    this.setState({ updateModalIsOpen: true });
  }

  closeUpdateModal() {
    this.setState({ updateModalIsOpen: false });
  }

  descriptionView() {
    if (this.props.rating.description) {
      return (
        <p className="drink-index-description">
          {this.props.rating.description}
        </p>
      );
    }
  }

  ratingView() {
    if (this.props.rating.checkin_rating) {
      return (
        <div className="rating-details">
          {this.descriptionView()}
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
        </div>
      );
    } else {
      return (<br/>);
    }
  }

  imageView() {
    if (this.props.rating.picture_url) {
      return <img src={this.props.rating.picture_url} />;
    }
  }

  name (name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  buttons() {
    if (this.props.rating.user.username === this.props.currentUser.username) {
      return (
        <div className="drink-crud-buttons">
          <a onClick={() => this.props.deleteRating(this.props.rating.id)}>
          <button>
            Delete
          </button></a>
          <a
            onClick={() => this.openUpdateModal()}>
          <button>
            Update
          </button></a>
        </div>
      );
    }
  }

  render () {
    let rating = this.props.rating;
    return (
      <li className="rating-index-item">
        <img className="user-pic" src={this.props.rating.user.picture_url} />
        <div className="rating-index-info">
          <span>
            <Link to={`/user/${rating.user.id}`} className="rating-link">
              {this.name(rating.user.username)}
            </Link>
            <span> is drinking a </span>
            <Link to={`/coffee/${rating.drink.id}`} className="rating-link">
              {rating.drink.name}
            </Link>
          </span>
        {this.ratingView()}
        {this.imageView()}
        {this.buttons()}

        <Modal
          className="rating-update-modal"
          isOpen={this.state.updateModalIsOpen}
          onRequestClose={this.closeUpdateModal}
          >

          <RatingUpdateModalContainer rating={rating}
            closeModal={this.closeUpdateModal}/>
        </Modal>
      </div>
    </  li>
  );
  }
}

export default RatingIndexItem;
