import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Find Me Something New</h1>
      <ul id="navtabs">
        <Link id="link" style={{ textDecoration: "none" }} to="/spotify">
          <li>Spotify</li>
        </Link>
        <Link id="link" style={{ textDecoration: "none" }} to="/youtube">
          <li>Youtube</li>
        </Link>
        <Link id="link" style={{ textDecoration: "none" }} to="/soundcloud">
          <li>Soundcloud</li>
        </Link>
      </ul>
      <h2>Please choose one of the above sections to get started!</h2>
    </div>
  );
}

export default Home;
