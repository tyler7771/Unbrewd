import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Welcome from './welcome';
import DrinkIndexContainer from './drinks/drink_index_container';
import DrinkShowContainer from './drinks/drink_show_container';

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

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={_ensureLoggedIn}>
          <Route path="/coffee" component={DrinkIndexContainer} />
          <Route path="/coffee/:drinkId" component={DrinkShowContainer} />
        </Route>
        <Route path="/welcome" component={Welcome} />
      </Router>
    </Provider>
  );
};

export default Root;
