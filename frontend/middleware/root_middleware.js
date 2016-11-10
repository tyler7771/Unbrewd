import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import DrinkMiddleware from './drink_middleware';
import RoasterMiddleware from './roaster_middleware';
import RatingMiddleware from './rating_middleware';
import ProfileMiddleware from './profile_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  DrinkMiddleware,
  RoasterMiddleware,
  RatingMiddleware,
  ProfileMiddleware
);

export default RootMiddleware;
