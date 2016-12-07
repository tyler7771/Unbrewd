import { connect } from 'react-redux';
import DrinkShow from './drink_show';
import { fetchDrink, deleteDrink, fetchDrinks }
  from '../../actions/drink_actions';
import { fetchRatings, deleteRating }
  from '../../actions/rating_actions';

const mapStateToProps = (state, ownProps) => ({
  drink: state.drink.drink[ownProps.params.drinkId],
  ratings: state.rating.slice().reverse(),
  stats: state.drink.drink[ownProps.params.drinkId] ?
    state.drink.drink[ownProps.params.drinkId].stats : {},
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchDrink: params => dispatch(fetchDrink(params)),
  fetchRatings: params => dispatch(fetchRatings(params)),
  deleteRating: rating => dispatch(deleteRating(rating)),
  deleteDrink: id => dispatch(deleteDrink(id)),
  fetchDrinks: () => dispatch(fetchDrinks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkShow);
