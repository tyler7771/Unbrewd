import { connect } from 'react-redux';
import ProfileUpdateModal from './update_modal';
import { fetchProfile, updateProfile } from '../../actions/profile_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.profile.profile
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: params => dispatch(fetchProfile(params)),
  updateProfile: profile => dispatch(updateProfile(profile))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileUpdateModal);
