import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import UpdateModalContainer from './update_modal_container';
import RatingIndexItem from '../ratings/rating_index_item';
import SidebarStatsContainer from './sidebar_stats_container';

class RecentActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { updateModalIsOpen: false };

    this.closeUpdateModal = this.closeUpdateModal.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchProfile({
  //     id: window.currentUser.id,
  //     type: "user"
  //   });
  //   this.props.fetchRatings({
  //     type: "user",
  //     id: window.currentUser.id,
  //     amount: 20
  //   });
  // }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openUpdateModal() {
    this.setState({ updateModalIsOpen: true });
  }

  closeUpdateModal() {
    this.setState({ updateModalIsOpen: false });
  }

  render () {
    let user = this.props.user;
    if (!user) {
      return <div>Loading...</div>;
    }
    if (this.props.stats) {
      return (
        <div className="drink-show">
          <SidebarStatsContainer />
          <div className="finding-drinks">
              <h1>Recent Activity</h1>
              <h2>Check out your recent check-in's!</h2>
          </div>

          <ul className="show-ratings">
            {
              this.props.ratings.map(rating => (
                <RatingIndexItem
                  key={rating.id}
                  rating={rating}
                  deleteRating={this.props.deleteRating}
                  currentUser={this.props.currentUser}
                  />
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

export default RecentActivity;
