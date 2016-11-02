import React from 'react';
import { withRouter, Link } from 'react-router';

const Header = ({currentUser, logout}) => {
  let logoutStatus;
  if (currentUser ) {
    logoutStatus = (<Link onClick={logout} className="logout">Logout</Link>);
  }

  return (
    <header>
      <div className="header-content">
        <Link to="/">
          <img className= "header-image" src="http://res.cloudinary.com/dfmvfna21/image/upload/v1478040041/kitchen_icon_coffee_cup_lpo5eu.png" />
        </Link>
        <input type="text" className="search-bar" value="" />
        <div className="user-button"><img className="profile-pic" onClick={logout} src="http://res.cloudinary.com/dfmvfna21/image/upload/v1478046196/Fields2_xkwxzq.jpg" /></div>
        <ul className="user-dropdown">
          <li className="dropdown-item"><Link to="/">Recent Activity</Link></li>
          <li className="dropdown-item"><Link to="/">Profile</Link></li>
          <li className="dropdown-item"><Link to="/">Coffee History</Link></li>
          <li className="dropdown-item"><Link to="/">Coffee History</Link></li>
          <li className="dropdown-item"><Link onClick={logout}>Logout</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
