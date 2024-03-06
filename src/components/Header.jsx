import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
        <Link to="/"><h1 data-shadow='HULU'>HULU<sub>movies</sub></h1></Link>
        
      <div className="header__icons">
        {/* <div className="header__icon">
          <NavLink
            to="/"
            className={(isActive) => (!isActive ? "header__icon--active" : "")}
          >
            <HomeIcon />
            <p> Home</p>
          </NavLink>
        </div>
        <div className="header__icon">
          <NavLink to="/trending" activeClassName="header__icon--active">
            <FlashOnIcon />
            <p>Trending</p>
          </NavLink>
        </div>
        <div className="header__icon">
          <SearchIcon />
          <p>Search</p>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
