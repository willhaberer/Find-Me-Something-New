import React from "react";

import { useQuery, useMutation } from "@apollo/react-hooks";
// import { getMe, deleteBook } from "../utils/API";
import { GET_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};

  if (!userData?.username) {
    return (
      <h4>
        You must be logged in to view this page! Please log in and try again!
      </h4>
    );
  }

  return <h4>somehow the conditional failed</h4>;
};

export default Profile;
