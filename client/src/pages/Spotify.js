import React, { useState } from "react";
import { getSpotifyToken, getRecTrack } from "../utils/API";
import "../styles/Spotify.css";
import { useMutation } from "@apollo/react-hooks";
import { SAVE_SPOTIFY_SONG } from "../utils/mutations";

function Spotify() {
  //useState
  const [embedCode, setEmbedCode] = useState("initial");
  const [trackURL, setTrackURL] = useState("initial");
  const [trackPop, setTrackPop] = useState("initial");
  const [releaseDate, setReleaseDate] = useState("initial");
  const [currentSong, setCurrentSong] = useState({});
  //useMutation
  const [saveSong] = useMutation(SAVE_SPOTIFY_SONG);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await getSpotifyToken();

      const data = await response.json();

      const token = data.access_token;
      var pop = 40;

      if (!token) {
        throw new Error("something went wrong!");
      }

      const result = await getRecTrack(token, pop);
      const trackData = await result.json();
      console.log(trackData);
      const songData = {
        artists: trackData.tracks[0].artists[0].name,
        trackId: trackData.tracks[0].id,
        link: trackData.tracks[0].external_urls.spotify,
        title: trackData.tracks[0].name,
      };

      setTrackURL(songData.link);
      setTrackPop(trackData.tracks[0].popularity);
      setReleaseDate(trackData.tracks[0].album.release_date);
      const inter = "https://open.spotify.com/embed/track/" + songData.trackId;
      setEmbedCode(inter);
      setCurrentSong(songData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveSong = async (event) => {
    event.preventDefault();
    console.log("haha not saved");
    console.log(currentSong);
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
          title="songPlayer"
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          id="spotifyPlayer"
        ></iframe>
        <div id="songInfo">
          <h2>Song Popularity on Spotify: {trackPop}</h2>
          <h4 id="subtext">(Popularity is on a scale from 0-100)</h4>
          <h2>Release Date: {releaseDate}</h2>
        </div>
        <br></br>
        <a id="trackLink" href={trackURL} target="_blank" rel="noreferrer">
          Listen On Spotify
        </a>
        <button id="songBtn" className="bouncy" onClick={handleSaveSong}>
          Save Song to Profile
        </button>
      </div>
    );
  }
}

export default Spotify;
