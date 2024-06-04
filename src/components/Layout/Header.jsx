import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header>
      <div className="header-block">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="" height="80" />
        </Link>
        <nav className="navbar">
          <ul>
            <NavItem link="/" label="Home" />
            <NavItem link="/about" label="About" />
            <NavItem link="/music" label="Music" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
