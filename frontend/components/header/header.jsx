import React from 'react';
import { withRouter, Link } from 'react-router';

const Header = ({currentUser, logout}) => {
  return (
    <header>
      <div className="header-content">
        <div className="header-containers">
        <Link to="/">
          <img className= "header-image" src="http://res.cloudinary.com/dfmvfna21/image/upload/c_scale,w_437/v1478718105/unbrewdOfficialBG_p2l9kx.png" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/global">The Roast</Link></li>
          <li><Link to="/coffee">All Coffees</Link></li>
        </ul>
        </div>
        <div className="header-containers">
        <div className="user-button">
          <img src={currentUser.picture_url} />
          <ul className="user-dropdown">
            <a href="/#/"><li>Recent Activity</li></a>
            <a href={`/#/user/${currentUser.id}`}><li>Profile</li></a>
            <a href={`/#/history/${currentUser.id}`}><li>Coffee History</li></a>
            <a><li onClick={logout}>Logout</li></a>
          </ul>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// <input type="text" className="search-bar" value="" />
