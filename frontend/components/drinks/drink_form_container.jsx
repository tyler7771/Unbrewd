import { connect } from 'react-redux';
import DrinkForm from './drink_form';
import { createDrink, updateDrink } from '../../actions/drink_actions';
import { fetchRoasters } from '../../actions/roaster_actions';

const mapStateToProps = state => ({
  roasters: Object.keys(state.roaster).map(id => state.roaster[id])
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'new/') ? createDrink : updateDrink;

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    fetchRoasters: () => dispatch(fetchRoasters())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkForm);
