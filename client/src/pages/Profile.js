import React, { useState } from "react";

import { useQuery } from "@apollo/react-hooks";

import { GET_ME } from "../utils/queries";
// import { REMOVE_SPOTIFY_SONG } from "../utils/mutations";

import "../styles/Profile.css";

const Profile = () => {
  //useState
  const [embedCode, setEmbedCode] = useState("initial");
  const [songIndex, setSongIndex] = useState(0);

  const { data } = useQuery(GET_ME);

  const userData = data?.me || {};
  console.log(userData);

  const handleNextSong = async () => {
    const index = songIndex;
    const newIndex = songIndex + 1;
    const embedInter = userData.savedSpotifySongs[index];
    setEmbedCode(embedInter);
    setSongIndex(newIndex);
  };

  const handleView = async () => {
    const index = songIndex;
    const newIndex = songIndex + 1;
    const embedInter = userData.savedSpotifySongs[index];
    setEmbedCode(embedInter);
    setSongIndex(newIndex);
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
          <button id="leftArrow">Back</button>
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
