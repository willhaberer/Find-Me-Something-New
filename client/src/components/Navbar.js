import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/fmsnLogoWhite.png";

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link id="link" style={{ textDecoration: "none" }} to="/">
        {/* <h1>FMSN</h1> */}
        <img
          id="logo"
          className="image"
          src={logo}
          alt="logo"
          height="20%"
          width="20%"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
