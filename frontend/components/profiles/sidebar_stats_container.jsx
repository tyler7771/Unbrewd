import { connect } from 'react-redux';
import SidebarStats from './sidebar_stats';
import { fetchProfile } from '../../actions/profile_actions';
import { fetchRatings, deleteRating } from '../../actions/rating_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.profile.profile,
  stats: state.profile.profile ? state.profile.profile.stats : {},
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: params => dispatch(fetchProfile(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarStats);
