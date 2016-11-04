import { connect } from 'react-redux';
import DrinkShow from './drink_show';
import { fetchDrink } from '../../actions/drink_actions';

const mapStateToProps = (state, ownProps) => ({
  drink: state.drink[ownProps.params.drinkId]
});

const mapDispatchToProps = dispatch => ({
  fetchDrink: id => dispatch(fetchDrink(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkShow);
