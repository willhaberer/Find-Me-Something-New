import React, { useState, useEffect } from "react";
import { getYoutubeVid, getVidId } from "../utils/API";
import { useMutation } from "@apollo/react-hooks";

function Youtube() {
  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await getVidId();

      if (!response) {
        throw new Error("something went wrong!");
      }
      const { items } = await response.json();
      console.log(items);
      const id = items[0].id.videoId;
      console.log(id);
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
