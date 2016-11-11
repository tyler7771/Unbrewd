import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ProfileUpdateModalContainer from './update_modal_container';
import CheckInModalContainer from '../ratings/checkin_modal_container';
import RatingIndexItem from '../ratings/rating_index_item';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { updateModalIsOpen: false };

    this.closeUpdateModal = this.closeUpdateModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchProfile({
      id: this.props.params.userId,
      type: "user"
    });
    this.props.fetchRatings({
      type: "user",
      id: this.props.params.userId,
      amount: 15
    });
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.userId !== newProps.params.userId) {
      this.props.fetchProfile({
        id: newProps.params.userId,
        type: "user"
      });
      this.props.fetchRatings({
        type: "user",
        id: newProps.params.userId,
        amount: 15
      });
    }
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

  name (name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  activityName() {
    if (window.currentUser.id === this.props.user.id) {
      return <h3>Check out your recent check-in's!</h3>;
    } else {
      return (
        <h3>Check out
          <span> {this.name(this.props.user.username)}&#39;s </span>
        recent check-in's!</h3>
      );
    }
  }

  updateButton() {
    if (window.currentUser.id === this.props.user.id) {
      return (
        <a><button onClick={() => this.openUpdateModal()}>
          Update
        </button></a>
    );
    }
  }

  render () {
    let user = this.props.user;
    if (!user) {
      return <div>Loading...</div>;
    }
    if (this.props.stats) {
      return (
        <div className="drink-show">
          <div className="profile-images">
            <img className="cover-photo" src={user.cover_photo_url} />
          </div>
          <div className="profile-user-details">
            <h1 className="profile-name">{this.name(user.username)}</h1>
            {this.updateButton()}
            <img className="profile-pic" src={user.picture_url} />
            <div className="profile-stats">
              <div className="profile-stat">
                <p className="stat-title">TOTAL</p>
                <p className="stat-number">{this.props.stats.all || 0}</p>
              </div>
              <div className="profile-stat">
                <p className="stat-title">UNIQUE</p>
                <p className="stat-number">{this.props.stats.unique || 0}</p>
              </div>
            </div>

          </div>

          <Modal
            className="update-modal"
            isOpen={this.state.updateModalIsOpen}
            onRequestClose={this.closeUpdateModal}>

            <ProfileUpdateModalContainer user={user}
              closeModal={this.closeUpdateModal}/>
          </Modal>

          <div className="profile-activity">
              <h2>Recent Activity</h2>
              {this.activityName()}
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
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default ProfileShow;
