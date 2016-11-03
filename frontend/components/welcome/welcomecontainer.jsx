import { connect } from 'react-redux';
import Welcome from './welcomehtml';
import { login, signup } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user))
});

export default connect(
  null,
  mapDispatchToProps
)(Welcome);
