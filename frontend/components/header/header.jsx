import React from 'react';
import { withRouter, Link } from 'react-router';

const Header = ({currentUser, logout}) => {
  return (
    <header>
      <div className="header-content">
        <Link to="/">
          <img className= "header-image" src="http://res.cloudinary.com/dfmvfna21/image/upload/v1478040041/kitchen_icon_coffee_cup_lpo5eu.png" />
        </Link>
        <input type="text" className="search-bar" value="" />
        <div className="user-button">
          <img src="http://res.cloudinary.com/dfmvfna21/image/upload/v1478046196/Fields2_xkwxzq.jpg" />
          <ul className="user-dropdown">
            <li><Link to="/">Recent Activity</Link></li>
            <li><Link to="/">Profile</Link></li>
            <li><Link to="/">Coffee History</Link></li>
            <li onClick={logout}>Logout</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
