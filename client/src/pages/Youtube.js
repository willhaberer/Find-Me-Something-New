import React, { useState, useEffect } from "react";
import { getYoutubeVid } from "../utils/API";
import { useMutation } from "@apollo/react-hooks";

function Youtube() {
  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await getYoutubeVid();

      if (!response) {
        throw new Error("something went wrong!");
      }
      const items = await response.json();

      console.log(items);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>this is the youtube page</h1>
      <button onClick={handleFormSubmit}>Get Youtube Vid</button>
    </div>
  );
}

export default Youtube;
