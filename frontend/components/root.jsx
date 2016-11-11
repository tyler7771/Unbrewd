import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Welcome from './welcome';
import DrinkIndexContainer from './drinks/drink_index_container';
import DrinkShowContainer from './drinks/drink_show_container';
import ProfileShowContainer from './profiles/profile_container';
import HistoryContainer from './profiles/history_container';
import DrinkFormContainer from './drinks/drink_form_container';
import RatingIndexContainer from './ratings/ratings_index_container';
import Recent from './profiles/recent_container';
import { fetchDrinks } from '../actions/drink_actions';
import { fetchProfile } from '../actions/profile_actions';
import { fetchRatings } from '../actions/rating_actions';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/welcome');
    }
  };

  const drinkIndex = () => {
    store.dispatch(fetchDrinks());
  };

  const getRatings = () => {
    store.dispatch(fetchProfile({
      id: store.getState().session.currentUser.id,
      type: "user"
    }));
    store.dispatch(fetchRatings({
      type: "user",
      id: store.getState().session.currentUser.id,
      amount: 20
    }));
  };

  const fetchIndex = () => {
    store.dispatch(fetchRatings({
      amount: 20
    }));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={_ensureLoggedIn}>
          <IndexRoute component={Recent} onEnter={getRatings}/>
          <Route path="/global" component={RatingIndexContainer} onEnter={fetchIndex}/>
          <Route path="/new" component={DrinkFormContainer} />
          <Route path="/update/:drinkid" component={DrinkFormContainer} />
          <Route path="/coffee" component={DrinkIndexContainer} onEnter={drinkIndex}/>
          <Route path="/coffee/:drinkId" component={DrinkShowContainer} />
          <Route path="/user/:userId" component={ProfileShowContainer} />
          <Route path="/history/:userId" component={HistoryContainer} />
        </Route>
        <Route path="/welcome" component={Welcome} />
      </Router>
    </Provider>
  );
};

export default Root;
