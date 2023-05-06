import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import profileImg from "../assets/images/profile.jpg";

const Header = () => {
  return (
    // header tag with a container
    <div className="header">
      <div className="header-container">
        {/* header content */}
        <div className="header-content">
          {/* logo */}
          <NavLink to="/" className={"header-logo"} />
          {/* navigation menu */}
          <nav className="header-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/" className={"nav-link"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className={"nav-link"}>
                  My Books
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className={"nav-link"}>
                  Browse ▾
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* search box */}
          <div className="search-box">
            <form className="search-form">
              <input className="search-input" />
              <button className="search-btn"></button>
            </form>
          </div>

          {/* personal section */}
          <div className="personal">
            <ul className="personal-nav">
              {/* notification icon */}
              <li className="personal-nav-item">
                <div>
                  <a href="/" role="button" className="personal-nav-link">
                    <span className="personal-nav-icon notification-icon"></span>
                  </a>
                </div>
              </li>
              {/* user profile icon */}
              <li className="personal-nav-item">
                <div>
                  <a href="/" role="button" className="personal-nav-link">
                    <span className="personal-nav-icon profile-icon ">
                      {/* user profile image */}
                      <img
                        src={profileImg}
                        alt="Rehan"
                        className="profile-img"
                      />
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
