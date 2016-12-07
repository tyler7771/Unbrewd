import { connect } from 'react-redux';
import RatingUpdateModal from './rating_update_modal';
import { updateRating } from '../../actions/rating_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    rating: ownProps.rating,
    closeRatingModal: ownProps.closeRatingUpdateModal
  };
};

const mapDispatchToProps = (dispatch, { location }) => ({
  updateRating: (rating) => dispatch(updateRating(rating))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingUpdateModal);
