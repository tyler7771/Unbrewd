import React from 'react';
import { Link } from 'react-router';
import WelcomeContainer from './welcome/welcomecontainer';

const Welcome = ({ children }) => (
  <div className="background">
    <WelcomeContainer />
    {children}
  </div>
);

export default Welcome;
