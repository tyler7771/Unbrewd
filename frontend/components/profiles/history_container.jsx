import { connect } from 'react-redux';
import CoffeeHistory from './history';
import { fetchProfile } from '../../actions/profile_actions';
import { fetchRatings, deleteRating } from '../../actions/rating_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.profile.profile,
  ratings: state.rating,
  stats: state.profile.profile ? state.profile.profile.stats : {},
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: params => dispatch(fetchProfile(params)),
  fetchRatings: params => dispatch(fetchRatings(params)),
  deleteRating: rating => dispatch(deleteRating(rating)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeHistory);
