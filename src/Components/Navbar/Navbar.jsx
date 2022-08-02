import React from "react";
import "./Navbar.scss";
import logo from "../../assets/svgs/Logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <Link to="/">
          <img className="navbar__logo" src={logo} alt="" />
        </Link>
        <div className="navbar__links-container">
          <Link className="navbar__link" to="/">
            HOME
          </Link>
          <Link className="navbar__link" to="/about">
            ABOUT US
          </Link>
          <Link className="navbar__link" to="/contact">
            CONTACT US
          </Link>
          <button className="navbar__log-in">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
