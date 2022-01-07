import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link id="link" style={{ textDecoration: "none" }} to="/">
        <li>FMSN</li>
      </Link>
    </nav>
  );
};

export default Navbar;
