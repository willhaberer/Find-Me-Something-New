import React, { useState, useEffect } from "react";
import { getYoutubeVid } from "../utils/API";
import { useMutation } from "@apollo/react-hooks";

function Youtube() {
  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await getYoutubeVid();

      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>this is the youtube page</h1>
    </div>
  );
}

export default Youtube;
