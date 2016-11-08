import { connect } from 'react-redux';
import RatingIndex from './ratings_index';
import { fetchRatings } from '../../actions/rating_actions';

const mapStateToProps = state => ({
  ratings: Object.keys(state.rating).map(id => state.rating[id])
});

const mapDispatchToProps = dispatch => ({
  fetchRatings: () => dispatch(fetchRatings()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingIndex);
