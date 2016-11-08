import { connect } from 'react-redux';
import DrinkForm from './drink_form';
import { createDrink, removeErrors } from '../../actions/drink_actions';
import { createRoaster, fetchRoasters } from '../../actions/roaster_actions';

const mapStateToProps = state => ({
  roasters: Object.keys(state.roaster).map(id => state.roaster[id]),
  errors: state.drink.errors
});

const mapDispatchToProps = (dispatch, { location }) => ({
  fetchRoasters: () => dispatch(fetchRoasters()),
  createRoaster: (roaster) => dispatch(createRoaster(roaster)),
  createDrink: (drink) => dispatch(createDrink(drink)),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkForm);
