import React, { useState } from "react";
import { getVidId } from "../utils/API";
import "../styles/Youtube.css";

function Youtube() {
  const [embedCode, setEmbedCode] = useState("disabled");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await getVidId();

      if (!response) {
        throw new Error("something went wrong!");
      }
      const { items } = await response.json();
      console.log(items);
      const id = items[items.length - 1].id.videoId;

      const inter = "https://www.youtube.com/embed/" + id;
      setEmbedCode(inter);

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
  } else if (embedCode === "disabled") {
    return (
      <div id="container">
        <h1>
          Youtube API had been temporarily disabled to comply with use
          Agreement, we hope to have this up in the future
        </h1>
      </div>
    );
  } else {
    return (
      <div id="container">
        <button id="vidBtn" className="bouncy" onClick={handleFormSubmit}>
          Get Vid
        </button>
        <iframe
          id="videoPlayer"
          width="560"
          height="315"
          src={embedCode}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default Youtube;
