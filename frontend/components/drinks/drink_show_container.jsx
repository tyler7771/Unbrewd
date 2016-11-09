import { connect } from 'react-redux';
import DrinkShow from './drink_show';
import { fetchDrink, deleteDrink } from '../../actions/drink_actions';
import { fetchRatings } from '../../actions/rating_actions';

const mapStateToProps = (state, ownProps) => ({
  drink: state.drink.drink[ownProps.params.drinkId],
  ratings: state.rating
});

const mapDispatchToProps = dispatch => ({
  fetchDrink: id => dispatch(fetchDrink(id)),
  fetchRatings: params => dispatch(fetchRatings(params)),
  deleteDrink: id => dispatch(deleteDrink(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkShow);
