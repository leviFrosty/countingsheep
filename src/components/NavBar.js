import React from "react";
import "../styles/navbar.css";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar-start">
          <div className="navbar__logo">
            <Link to="/">
              <i className="fas fa-fire-alt"></i>
            </Link>
          </div>
          <nav className="navbar-nav">
            <ul className="navbar__ul">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/made-with">Made With</NavLink>
              <a
                href="https://github.com/levifrosty"
                target="_blank"
                rel="noreferrer noopener"
              >
                See Source
              </a>
            </ul>
          </nav>
        </div>
        <div className="navbar-end">
          <div className="navbar__cta">
            <Link to="/signin">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
