import { connect } from 'react-redux';
import CheckInModal from './checkin_modal';
import { createRating } from '../../actions/rating_actions';

const mapDispatchToProps = dispatch => ({
  createRating: (rating) => dispatch(createRating(rating))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckInModal);
