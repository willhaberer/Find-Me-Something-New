import React from "react";

import { useQuery } from "@apollo/react-hooks";
// import { getMe, deleteBook } from "../utils/API";
import { GET_ME } from "../utils/queries";

import "../styles/Profile.css";

const Profile = () => {
  const { data } = useQuery(GET_ME);
  const userData = data?.me || {};

  if (!userData?.username) {
    return (
      <h4>
        You must be logged in to view this page! Please log in and try again!
      </h4>
    );
  }

  return (
    <div id="profilePage">
      <h1 id="welcome">Welcome Back {userData.username}!</h1>
    </div>
  );
};

export default Profile;
