import React, { useState, useEffect } from "react";
import { getSpotifyToken, getRecTrack } from "../utils/API";
import { useMutation } from "@apollo/react-hooks";

function Spotify() {
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
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>this is the spotify page</h1>
      <button onClick={handleFormSubmit}>Get Song</button>
    </div>
  );
}

export default Spotify;
