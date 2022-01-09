import React, { useState, useEffect } from "react";
import { getSpotifyToken, getRecTrack } from "../utils/API";
import { useMutation } from "@apollo/react-hooks";

function Spotify() {
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await getSpotifyToken();
      console.log(response);
      const data = await response.json();
      console.log(data);
      const token = data.access_token;

      if (!token) {
        throw new Error("something went wrong!");
      }

      const track = await getRecTrack(token);
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
