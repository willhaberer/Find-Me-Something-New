import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div id="mainContainer">
      <h1>Welcome to Find Me Something New</h1>
      <div id="linkContainer">
        <Link id="link" to="/spotify">
          <h3 id="spotifyLink">Spotify</h3>
        </Link>
        <Link id="link" to="/profile">
          <h3 id="youtubeLink">Profile</h3>
        </Link>
        <Link id="link" to="/signup">
          <h3 id="soundcloudLink">Signup</h3>
        </Link>
      </div>
      <h2>Please choose one of the above sections to get started!</h2>
    </div>
  );
}

export default Home;
