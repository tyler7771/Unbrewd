import { connect } from 'react-redux';
import RatingIndex from './ratings_index';
import { fetchRatings, deleteRating } from '../../actions/rating_actions';

const mapStateToProps = state => ({
  ratings: Object.keys(state.rating).map(id => state.rating[id]),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchRatings: (props) => dispatch(fetchRatings(props)),
  deleteRating: rating => dispatch(deleteRating(rating))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingIndex);
