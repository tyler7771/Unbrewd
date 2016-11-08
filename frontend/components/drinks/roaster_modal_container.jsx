import { connect } from 'react-redux';
import RoasterModal from './roaster_modal';
import { createRoaster } from '../../actions/roaster_actions';

const mapDispatchToProps = (dispatch, { location }) => ({
  createRoaster: roaster => dispatch(createRoaster(roaster))
});

export default connect(
  null,
  mapDispatchToProps
)(RoasterModal);
