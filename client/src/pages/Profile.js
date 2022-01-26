import React from "react";

import { useQuery } from "@apollo/react-hooks";

import { GET_ME } from "../utils/queries";
// import { REMOVE_SPOTIFY_SONG } from "../utils/mutations";

import "../styles/Profile.css";

const Profile = () => {
  const { data } = useQuery(GET_ME);
  const userData = data?.me || {};
  console.log(userData);

  if (!userData?.username) {
    return (
      <div id="profilePage">
        <h1 id="welcome">You must be logged in to view the profile page</h1>
      </div>
    );
  }

  return (
    <div id="profilePage">
      <h1 id="welcome">Welcome Back {userData.username}!</h1>
      <h3 id="welcome">You Have Found: [{userData.songsFound}] Songs!</h3>
    </div>
  );
};

export default Profile;
