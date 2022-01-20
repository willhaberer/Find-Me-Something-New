import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_ME } from "../utils/queries";
import "../styles/Navbar.css";
import logo from "../assets/fmsnLogoWhite.png";
import Auth from "../utils/auth";

const Navbar = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};

  const logoutUser = async (event) => {
    event.preventDefault();
    console.log("logout clicked");
  };

  if (!userData?.username) {
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
        <Link id="link" to="/login">
          <h3 id="loginLink">Login</h3>
        </Link>
        <Link id="link" to="/about">
          <h3 id="aboutLink">About</h3>
        </Link>
        <Link id="link" to="/signup">
          <h3 id="signupLink">Signup</h3>
        </Link>
        <Link id="link" to="/profile">
          <h3 id="profileLink">Profile</h3>
        </Link>
      </div>
    );
  }

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
      <Link id="link" to="/about">
        <h3 id="aboutLink">About</h3>
      </Link>
      <Link id="link" to="/profile">
        <h3 id="profileLink">Profile</h3>
      </Link>
      <a>
        <button id="logout" onClick={logoutUser}>
          Logout
        </button>
      </a>
    </div>
  );
};

export default Navbar;
