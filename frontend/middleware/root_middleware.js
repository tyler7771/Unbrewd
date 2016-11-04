import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import DrinkMiddleware from './drink_middleware';
import RoasterMiddleware from './roaster_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  DrinkMiddleware,
  RoasterMiddleware
);

export default RootMiddleware;
