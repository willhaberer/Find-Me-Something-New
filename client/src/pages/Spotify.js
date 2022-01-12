import React, { useState } from "react";
import { getSpotifyToken, getRecTrack } from "../utils/API";
import "../styles/Spotify.css";

function Spotify() {
  const [embedCode, setEmbedCode] = useState("initial");
  const [trackURL, setTrackURL] = useState("initial");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await getSpotifyToken();

      const data = await response.json();

      const token = data.access_token;

      if (!token) {
        throw new Error("something went wrong!");
      }

      const result = await getRecTrack(token);
      const trackData = await result.json();
      console.log(trackData);
      const trackID = trackData.tracks[0].id;
      console.log(trackID);
      setTrackURL(trackData.tracks[0].external_urls.spotify);
      const inter = "https://open.spotify.com/embed/track/" + trackID;
      console.log("inter: " + inter);
      setEmbedCode(inter);
    } catch (err) {
      console.error(err);
    }
  };

  if (embedCode === "initial") {
    return (
      <div id="container">
        <button id="songBtn" class="bouncy" onClick={handleFormSubmit}>
          Get Song
        </button>
      </div>
    );
  } else {
    return (
      <div id="container">
        <button id="songBtn" class="bouncy" onClick={handleFormSubmit}>
          Get Song
        </button>
        <iframe
          src={embedCode}
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <a id="trackLink" href={trackURL} target="_blank">
          Listen On Spotify
        </a>
      </div>
    );
  }
}

export default Spotify;
