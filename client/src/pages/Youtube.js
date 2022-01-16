import React, { useState } from "react";
import { getYoutubeVid, getVidId } from "../utils/API";

function Youtube() {
  const [embedCode, setEmbedCode] = useState("initial");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      setEmbedCode("https://www.youtube.com/embed/PcSPfzU1Wyk");

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

  if (embedCode === "initial") {
    return (
      <div id="container">
        <button id="vidBtn" className="bouncy" onClick={handleFormSubmit}>
          Get Vid
        </button>
      </div>
    );
  } else {
    return (
      <div id="container">
        <button id="vidBtn" className="bouncy" onClick={handleFormSubmit}>
          Get Vid
        </button>
        <iframe
          width="560"
          height="315"
          src={embedCode}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default Youtube;
