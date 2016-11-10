import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Welcome from './welcome';
import DrinkIndexContainer from './drinks/drink_index_container';
import DrinkShowContainer from './drinks/drink_show_container';
import ProfileShowContainer from './profiles/profile_container';
import DrinkFormContainer from './drinks/drink_form_container';
import RatingIndexContainer from './ratings/ratings_index_container';
import { fetchDrinks } from '../actions/drink_actions';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/welcome');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const drinkIndex = () => {
    store.dispatch(fetchDrinks());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={_ensureLoggedIn}>
          <Route path="/global" component={RatingIndexContainer} />
          <Route path="/new" component={DrinkFormContainer} />
          <Route path="/update/:drinkid" component={DrinkFormContainer} />
          <Route path="/coffee" component={DrinkIndexContainer} onEnter={drinkIndex}/>
          <Route path="/coffee/:drinkId" component={DrinkShowContainer} />
          <Route path="/user/:userId" component={ProfileShowContainer} />
        </Route>
        <Route path="/welcome" component={Welcome} />
      </Router>
    </Provider>
  );
};

export default Root;
