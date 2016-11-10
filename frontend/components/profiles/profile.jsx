import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import UpdateModalContainer from './update_modal_container';
import CheckInModalContainer from '../ratings/checkin_modal_container';
import RatingIndexItem from '../ratings/rating_index_item';

class DrinkShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { updateModalIsOpen: false };

    this.closeUpdateModal = this.closeUpdateModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchProfile({
      id: this.props.params.userId,
      type: "user",
    });
    this.props.fetchRatings({
      type: "user",
      id: this.props.params.userId,
      amount: 15
    });
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openUpdateModal() {
    this.setState({ updateModalIsOpen: true });
  }

  closeUpdateModal() {
    this.setState({ updateModalIsOpen: false });
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

  table () {
    if (this.props.ratings) {
      const stats = this.props.stats;
      return (
        <table className="drink-statistics">
          <tbody>
            <tr>
              <th className="table-tl">
                <p className="stat-title">TOTAL</p>
                <p className="stat-number">{stats.all || 0}</p>
              </th>
              <th className="table-tr">
                <p className="stat-title">UNIQUE</p>
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
    return (
      <div>
        Hey!
      </div>
    );
  }
}

export default DrinkShow;
