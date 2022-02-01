import React, { useState } from "react";

import { useQuery, useMutation } from "@apollo/react-hooks";

import { GET_ME } from "../utils/queries";
import { REMOVE_SPOTIFY_SONG } from "../utils/mutations";

import Auth from "../utils/auth";

import "../styles/Profile.css";

const Profile = () => {
  //useState
  const [embedCode, setEmbedCode] = useState("initial");
  const [songIndex, setSongIndex] = useState(0);

  const { data } = useQuery(GET_ME);
  const [removeSong] = useMutation(REMOVE_SPOTIFY_SONG);

  const userData = data?.me || {};

  const handleNextSong = async () => {
    const index = songIndex;
    const newIndex = songIndex + 1;
    const embedInter = userData.savedSpotifySongs[index];
    console.log(embedInter);
    setEmbedCode(embedInter);
    if (newIndex === userData.savedSpotifySongs.length) {
      setSongIndex(0);
    } else {
      setSongIndex(newIndex);
    }
  };

  const handlePreviousSong = async () => {
    const index = songIndex;
    const newIndex = index - 1;
    const embedInter = userData.savedSpotifySongs[index];
    setEmbedCode(embedInter);
    if (newIndex === -1) {
      setSongIndex(userData.savedSpotifySongs.length - 1);
    } else {
      setSongIndex(newIndex);
    }
  };

  const handleView = async () => {
    const index = songIndex;
    const newIndex = songIndex + 1;
    const embedInter = userData.savedSpotifySongs[index];
    setEmbedCode(embedInter);
    setSongIndex(newIndex);
  };

  const handleRemoveSong = async () => {
    console.log(embedCode);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      alert("Must be Signed in to Remove Songs!");
      return;
    }
    const spotifyTrackId = embedCode;
    try {
      const { data } = await removeSong({
        variables: { spotifyTrackId },
      });
      console.log(data);
      alert("Success Song Removed!");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  if (!userData?.username) {
    return (
      <div id="profilePage">
        <h1 id="welcome">You must be logged in to view the profile page</h1>
      </div>
    );
  }

  if (embedCode === "initial") {
    return (
      <div id="profilePage">
        <div id="welcome">
          <h1 id="welcome">Welcome Back {userData.username}!</h1>
          <h3 id="welcome">You Have Found: [{userData.songsFound}] Songs!</h3>
        </div>
        <br></br>
        <div id="savedSongs">
          <h1 id="savedSongs">
            You have Saved {userData.spotifySongCount} Songs!
          </h1>
          <button id="view" onClick={handleView}>
            View your Saved Songs
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div id="profilePage">
        <div id="welcome">
          <h1 id="welcome">Welcome Back {userData.username}!</h1>
          <h3 id="welcome">You Have Found: [{userData.songsFound}] Songs!</h3>
        </div>
        <br></br>
        <div id="savedSongs">
          <h1 id="savedSongs">
            You have Saved {userData.spotifySongCount} Songs!
          </h1>
        </div>
        <div id="songPlayer">
          <button id="leftArrow" onClick={handlePreviousSong}>
            Previous
          </button>
          <div id="songAndInfo">
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
          </div>
          <button id="removeBtn" onClick={handleRemoveSong}>
            Remove Song from Profile
          </button>
          <br></br>
          <button id="rightArrow" onClick={handleNextSong}>
            Next
          </button>
          <br></br>
        </div>
      </div>
    );
  }
};
export default Profile;
