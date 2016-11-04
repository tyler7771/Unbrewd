import { connect } from 'react-redux';
import DrinkIndex from './drink_index';
import { fetchDrinks } from '../../actions/drink_actions';

const mapStateToProps = state => ({
  drinks: Object.keys(state.drink).map(id => state.drink[id])
});

const mapDispatchToProps = dispatch => ({
  fetchDrinks: () => dispatch(fetchDrinks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkIndex);
