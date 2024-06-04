import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ link, label }) => {
  return (
    <li>
      <Link to={link}>{label}</Link>
    </li>
  );
};

export default NavItem;
