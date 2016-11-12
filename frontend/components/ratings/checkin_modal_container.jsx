import { connect } from 'react-redux';
import CheckInModal from './checkin_modal';
import { createRating } from '../../actions/rating_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    closeModal: ownProps.closeModal
  };
};

const mapDispatchToProps = dispatch => ({
  createRating: (rating) => dispatch(createRating(rating))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckInModal);
