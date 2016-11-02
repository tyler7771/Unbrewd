import React from 'react';
import { withRouter, Link } from 'react-router';

const Greeting = ({currentUser, logout}) => {
  let userGreeting;
  if (!currentUser){
    userGreeting = (
      <ul>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );
  } else {
    userGreeting = (
      <span>
        <h2>Hey there {currentUser.username}!</h2>
      </span>
    );
  }

  return (
    <div>

      {userGreeting}
    </div>
  );
};

export default Greeting;
