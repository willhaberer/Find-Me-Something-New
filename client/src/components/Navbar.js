import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/fmsnLogoWhite.png";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link id="link" style={{ textDecoration: "none" }} to="/">
        <img
          id="logo"
          className="image"
          src={logo}
          alt="logo"
          height="15%"
          width="15%"
        />
      </Link>
    </div>
  );
};

export default Navbar;
