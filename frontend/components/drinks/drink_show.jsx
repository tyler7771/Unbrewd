import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import UpdateModalContainer from './update_modal_container';
import CheckInModalContainer from '../ratings/checkin_modal_container';
import RatingIndexItem from '../ratings/rating_index_item';

class DrinkShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { updateModalIsOpen: false, checkInModalIsOpen: false };

    this.handleDelete = this.handleDelete.bind(this);

    this.closeUpdateModal = this.closeUpdateModal.bind(this);
    this.closeCheckInModal = this.closeCheckInModal.bind(this);
    this.openUpdateModal = this.openUpdateModal.bind(this);
    this.openCheckInModal = this.openCheckInModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchDrink({
      id: this.props.params.drinkId,
      type: "drink",
    });
    this.props.fetchRatings({
      type: "drink",
      id: this.props.params.drinkId,
      amount: 15
    });
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteDrink(this.props.params.drinkId);
    this.props.fetchRatings({
      type: "drink",
      id: this.props.params.drinkId,
      amount: 15
    });
  }

  openUpdateModal() {
    this.setState({ updateModalIsOpen: true });
  }

  closeUpdateModal() {
    this.setState({ updateModalIsOpen: false });
  }

  openCheckInModal() {
    this.setState({ checkInModalIsOpen: true });
  }

  closeCheckInModal() {
    this.setState({ checkInModalIsOpen: false });
  }

  showAllButton() {
    if (this.props.ratings.length === 15) {
      return (
        <button onClick={() => {
            this.props.fetchRatings({
            type: "drink", id: this.props.params.drinkId});
          }}>
            Show All
          </button>
      );
    }
  }

  checked (value) {
    if (value === this.props.stats.average_rating) {
      return "checked";
    } else {
      return "";
    }
  }

  table () {
    if (this.props.ratings) {
      const stats = this.props.stats;
      return (
        <table className="drink-statistics">
          <tbody>
            <tr>
              <th className="table-tl">
                <p className="stat-title">TOTAL CHECKINS</p>
                <p className="stat-number">{stats.all || 0}</p>
              </th>
              <th className="table-tr">
                <p className="stat-title">UNIQUE USERS</p>
                <p className="stat-number">{stats.unique || 0}</p>
              </th>
            </tr>
            <tr>
              <th className="table-bl"></th>
              <th>
                <p className="stat-title">YOU</p>
                <p className="user-stat-number">{stats.user || 0}</p>
              </th>
            </tr>
          </tbody>
        </table>
      );
    }
  }

  render () {
    const drink = this.props.drink;
    if (!drink) {
      return <div>Loading...</div>;
    }
    if (this.props.stats) {
      return (
        <div className="drink-show">
          <div className="drink-show-item">
            <div className="snapshot">
              <img className="drink-show-image" src={drink.roaster.picture_url} />

              <div className="drink-show-snapshot">
                <h1 className="drink-show-title">{drink.name}</h1>
                <p className="drink-show-roaster">
                  {drink.roaster.name}
                </p>
              </div>
              {this.table()}

            </div>

            <div className="drink-details">
              <p className="drink-show-roast-type">
                <span>Roast Type: </span>{drink.roast_type}
              </p>
              <form id="ratingsForm">
                <div className="beans">
                    <input type="radio" name="bean" checked={this.checked(1)}
                      className="bean-1" id="bean-1" readOnly/>
                    <label className="bean-1" htmlFor="bean-1">1</label>
                    <input type="radio" name="bean" checked={this.checked(2)}
                      className="bean-2" id="bean-2" readOnly/>
                    <label className="bean-2" htmlFor="bean-2">2</label>
                    <input type="radio" name="bean" checked={this.checked(3)}
                      className="bean-3" id="bean-3" readOnly/>
                    <label className="bean-3" htmlFor="bean-3">3</label>
                    <input type="radio" name="bean" checked={this.checked(4)}
                      className="bean-4" id="bean-4" readOnly/>
                    <label className="bean-4" htmlFor="bean-4">4</label>
                    <input type="radio" name="bean" checked={this.checked(5)}
                      className="bean-5" id="bean-5" readOnly/>
                    <label className="bean-5" htmlFor="bean-5">5</label>
                    <span></span>
                </div>
              </form>
              <p>
                {this.props.stats.count || 0}<span> Ratings</span>
              </p>
            </div>

            <div className="drink-description">
              <p><span>Description: </span>{drink.description}</p>

              <div className="drink-crud-buttons">
                <a><button onClick={() => this.openUpdateModal()}>
                  Update
                </button></a>
                <a><button onClick={this.handleDelete}>
                  Delete
                </button></a>
              <a><button onClick={this.openCheckInModal}>
                  Check-In
                </button></a>
              </div>
            </div>
          </div>

          <Modal
            className="update-modal"
            isOpen={this.state.updateModalIsOpen}
            onRequestClose={this.closeUpdateModal}
            >

            <UpdateModalContainer drink={drink}
              closeModal={this.closeUpdateModal}/>
          </Modal>

          <Modal
            className="check-in-modal"
            isOpen={this.state.checkInModalIsOpen}
            onRequestClose={this.closeCheckInModal}
            >

            <CheckInModalContainer drink={drink}
              closeModal={this.closeCheckInModal}/>
          </Modal>

          <div className="finding-drinks">
              <h1>Recent Global Activity</h1>
              <h2>Check out what others have to say about this coffee!</h2>
          </div>

          <ul className="show-ratings">
            {
              this.props.ratings.map(rating => (
                <RatingIndexItem
                  key={rating.id}
                  rating={rating}
                  deleteRating={this.props.deleteRating}
                  currentUser={this.props.currentUser} />
              ))
            }
          </ul>
          {this.showAllButton()}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DrinkShow;
