import { connect } from 'react-redux';
import UpdateModal from './update_modal';
import { updateDrink } from '../../actions/drink_actions';
import { fetchRoasters } from '../../actions/roaster_actions';

const mapStateToProps = state => ({
  roasters: Object.keys(state.roaster).map(id => state.roaster[id])
});

const mapDispatchToProps = (dispatch, { location }) => ({
  fetchRoasters: () => dispatch(fetchRoasters()),
  updateDrink: (drink) => dispatch(updateDrink(drink))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateModal);
