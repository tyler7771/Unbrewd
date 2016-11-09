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
  }

  componentDidMount() {
    this.props.fetchDrink(this.props.params.drinkId);
    this.props.fetchRatings({type: "drink", id: this.props.params.drinkId});
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteDrink(this.props.params.drinkId);
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

  render () {
    const drink = this.props.drink;
    if (!drink) {
      return <div>Loading...</div>;
    }

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

            <table className="drink-statistics">
              <tbody>
                <tr>
                  <th className="table-tl">
                    <p className="stat-title">TOTAL</p>
                    <p className="stat-number">0</p>
                  </th>
                  <th className="table-tr">
                    <p className="stat-title">UNIQUE</p>
                    <p className="stat-number">0</p>
                  </th>
                </tr>
                <tr>
                  <th className="table-bl"></th>
                  <th>
                    <p className="stat-title">YOU</p>
                    <p className="user-stat-number">0</p>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="drink-details">
            <p className="drink-show-roast-type">
              <span>Roast Type: </span>{drink.roast_type}
            </p>
            <form id="ratingsForm">
              <div className="beans">
                  <input type="radio" name="bean"
                    className="bean-1" id="bean-1"/>
                  <label className="bean-1" htmlFor="bean-1">1</label>
                  <input type="radio" name="bean"
                    className="bean-2" id="bean-2"/>
                  <label className="bean-2" htmlFor="bean-2">2</label>
                  <input type="radio" name="bean"
                    className="bean-3" id="bean-3"/>
                  <label className="bean-3" htmlFor="bean-3">3</label>
                  <input type="radio" name="bean"
                    className="bean-4" id="bean-4"/>
                  <label className="bean-4" htmlFor="bean-4">4</label>
                  <input type="radio" name="bean"
                    className="bean-5" id="bean-5"/>
                  <label className="bean-5" htmlFor="bean-5">5</label>
                  <span></span>
              </div>
            </form>
            <p>
              0<span> Ratings</span>
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
              <a><button onClick={() => this.openCheckInModal()}>
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

        <ul className="show-ratings">
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

export default DrinkShow;
