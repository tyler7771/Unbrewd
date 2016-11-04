import React from 'react';
import { Link } from 'react-router';
import DrinkIndexContainer from './drinks/drink_index_container';
import HeaderContainer from './header/headercontainer';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    <DrinkIndexContainer />
    {children}
  </div>
);

export default App;
