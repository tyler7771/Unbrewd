import { connect } from 'react-redux';
import DrinkForm from './drink_form';
import { createDrink } from '../../actions/drink_actions';
import { fetchRoasters } from '../../actions/roaster_actions';

const mapStateToProps = state => ({
  roasters: Object.keys(state.roaster).map(id => state.roaster[id]),
  errors: state.drink.errors
});

const mapDispatchToProps = (dispatch, { location }) => ({
  fetchRoasters: () => dispatch(fetchRoasters()),
  createDrink: (drink) => dispatch(createDrink(drink))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkForm);
