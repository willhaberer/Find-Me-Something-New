import React, { useState, useEffect } from "react";
import { getSpotifyToken, getRecTrack } from "../utils/API";
import { useMutation } from "@apollo/react-hooks";

function Spotify() {
  const [embedCode, setEmbedCode] = useState("initial");

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
      const trackID = trackData.tracks[0].id;
      console.log(trackID);
      const inter = "https://open.spotify.com/embed/track/" + trackID;
      console.log("inter: " + inter);
      setEmbedCode(inter);
    } catch (err) {
      console.error(err);
    }
  };

  if (embedCode === "initial") {
    return (
      <div>
        <h1>this is the spotify page</h1>
        <button onClick={handleFormSubmit}>Get Song</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>this is the spotify page</h1>
        <button onClick={handleFormSubmit}>Get Song</button>
        <iframe
          src={embedCode}
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    );
  }
}

{
  /* <iframe
        src={embedCode.name}
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe> */
}

export default Spotify;
