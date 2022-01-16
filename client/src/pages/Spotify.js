import React, { useState } from "react";
import { getSpotifyToken, getRecTrack } from "../utils/API";
import "../styles/Spotify.css";

function Spotify() {
  const [embedCode, setEmbedCode] = useState("initial");
  const [trackURL, setTrackURL] = useState("initial");
  const [trackPop, setTrackPop] = useState("initial");
  const [releaseDate, setReleaseDate] = useState("initial");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await getSpotifyToken();

      const data = await response.json();

      const token = data.access_token;
      var pop = 50;

      if (!token) {
        throw new Error("something went wrong!");
      }

      const result = await getRecTrack(token, pop);
      const trackData = await result.json();
      console.log(trackData);
      const trackID = trackData.tracks[0].id;
      setTrackURL(trackData.tracks[0].external_urls.spotify);
      setTrackPop(trackData.tracks[0].popularity);
      setReleaseDate(trackData.tracks[0].album.release_date);
      const inter = "https://open.spotify.com/embed/track/" + trackID;
      setEmbedCode(inter);
    } catch (err) {
      console.error(err);
    }
  };

  if (embedCode === "initial") {
    return (
      <div id="container">
        <button id="songBtn" className="bouncy" onClick={handleFormSubmit}>
          Get Song
        </button>
      </div>
    );
  } else {
    return (
      <div id="container">
        <button id="songBtn" className="bouncy" onClick={handleFormSubmit}>
          Get Song
        </button>
        <iframe
          src={embedCode}
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          id="spotifyPlayer"
        ></iframe>

        <h2>Popularity on Spotify: {trackPop}</h2>
        <h2>Release Date: {releaseDate}</h2>
        <br></br>
        <a id="trackLink" href={trackURL} target="_blank" rel="noreferrer">
          Listen On Spotify
        </a>
      </div>
    );
  }
}

export default Spotify;
