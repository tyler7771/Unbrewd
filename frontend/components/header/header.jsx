import React from 'react';
import { withRouter, Link } from 'react-router';

const Header = ({currentUser, logout}) => {
  return (
    <header>
      <div className="header-content">
        <div className="header-containers">
        <Link to="/">
          <img className= "header-image" src="http://res.cloudinary.com/dfmvfna21/image/upload/v1478040041/kitchen_icon_coffee_cup_lpo5eu.png" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">The Roast</Link></li>
          <li><Link to="/">Top Rated</Link></li>
          <li><Link to="/">Rate a Coffee</Link></li>
        </ul>
        </div>
        <div className="header-containers">
        <div className="user-button">
          <img src="http://res.cloudinary.com/dfmvfna21/image/upload/v1478046196/Fields2_xkwxzq.jpg" />
          <ul className="user-dropdown">
            <li><Link to="/">Recent Activity</Link></li>
            <li><Link to="/">Profile</Link></li>
            <li><Link to="/">Coffee History</Link></li>
            <li onClick={logout}>Logout</li>
          </ul>
        </div>
        <input type="text" className="search-bar" value="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
