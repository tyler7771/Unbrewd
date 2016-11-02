import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greetingcontainer';
import HeaderContainer from './header/headercontainer';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    <GreetingContainer />
    {children}
  </div>
);

export default App;
