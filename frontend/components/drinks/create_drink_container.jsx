import { connect } from 'react-redux';
import CreateDrink from './create_drink';
import { fetchDrinks, deleteDrink, createDrink } from '../../actions/drink_actions';

const mapStateToProps = state => ({
  drinks: Object.keys(state.drinks).map(id => state.drinks[id])
});

const mapDispatchToProps = dispatch => {
  // fetchRoasters: () => dispatch(fetchRoasters()),
  return {

    createDrink: drink => dispatch(createDrink(drink))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDrink);
