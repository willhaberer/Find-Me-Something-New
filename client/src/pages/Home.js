import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="mainContainer">
      <h1>Welcome to Find Me Something New</h1>
      <Link id="link" to="/login">
        <h3 id="loginLink">Login</h3>
      </Link>
      <div id="linkContainer">
        <Link id="link" to="/spotify">
          <h3 id="spotifyLink">Spotify</h3>
        </Link>
        <Link id="link" to="/profile">
          <h3 id="youtubeLink">Profile</h3>
        </Link>
        <Link id="link" to="/About">
          <h3 id="soundcloudLink">About</h3>
        </Link>
      </div>
      <h2>Please choose one of the above sections to get started!</h2>
    </div>
  );
}

export default Home;
