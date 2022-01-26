import React, { useState } from "react";
import { getSpotifyToken, getRecTrack } from "../utils/API";
import "../styles/Spotify.css";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { SAVE_SPOTIFY_SONG, UPDATE_SONGS_FOUND } from "../utils/mutations";
import { GET_ME } from "../utils/queries";

import Auth from "../utils/auth";

function Spotify() {
  //useState
  const [embedCode, setEmbedCode] = useState("initial");
  const [trackURL, setTrackURL] = useState("initial");
  const [trackPop, setTrackPop] = useState("initial");
  const [releaseDate, setReleaseDate] = useState("initial");
  const [currentSong, setCurrentSong] = useState({});
  const [artist, setArtist] = useState("initial");

  //useMutation
  const [saveSong] = useMutation(SAVE_SPOTIFY_SONG);
  const [updateSongsFound] = useMutation(UPDATE_SONGS_FOUND);

  const { data } = useQuery(GET_ME);

  const handleGetSong = async (event) => {
    event.preventDefault();

    if (data) {
      const userID = data.me._id;

      try {
        const { data } = await updateSongsFound({
          variables: { userID },
        });
      } catch (err) {
        console.error(err);
      }
    }

    try {
      const response = await getSpotifyToken();
      const data = await response.json();
      const token = data.access_token;
      const pop = 18;

      if (!token) {
        throw new Error("no token!");
      }

      const result = await getRecTrack(token, pop);
      const trackData = await result.json();
      console.log(trackData);
      if (trackData.tracks.length === 0) {
        handleGetSongPopTwenty();
      } else {
        const songData = {
          artist: trackData.tracks[0].artists[0].name,
          trackId: trackData.tracks[0].id,
          link: trackData.tracks[0].external_urls.spotify,
          title: trackData.tracks[0].name,
        };

        setTrackURL(songData.link);
        setTrackPop(trackData.tracks[0].popularity);
        setReleaseDate(trackData.tracks[0].album.release_date);
        setArtist(songData.artist);
        const inter =
          "https://open.spotify.com/embed/track/" + songData.trackId;
        setEmbedCode(inter);
        setCurrentSong(songData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetSongPopTwenty = async () => {
    try {
      const response = await getSpotifyToken();
      const data = await response.json();
      const token = data.access_token;
      const pop = 20;

      if (!token) {
        throw new Error("something went wrong!");
      }

      const result = await getRecTrack(token, pop);
      const trackData = await result.json();
      console.log(trackData);
      if (trackData.tracks.length === 0) {
        handleGetSongPopTwentyfive();
      } else {
        const songData = {
          artist: trackData.tracks[0].artists[0].name,
          trackId: trackData.tracks[0].id,
          link: trackData.tracks[0].external_urls.spotify,
          title: trackData.tracks[0].name,
        };

        setTrackURL(songData.link);
        setTrackPop(trackData.tracks[0].popularity);
        setReleaseDate(trackData.tracks[0].album.release_date);
        const inter =
          "https://open.spotify.com/embed/track/" + songData.trackId;
        setEmbedCode(inter);
        setCurrentSong(songData);
        setArtist(songData.artist);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetSongPopTwentyfive = async () => {
    try {
      const response = await getSpotifyToken();
      const data = await response.json();
      const token = data.access_token;
      const pop = 25;

      if (!token) {
        throw new Error("something went wrong!");
      }

      const result = await getRecTrack(token, pop);
      const trackData = await result.json();
      console.log(trackData);
      if (trackData.tracks.length === 0) {
        handleGetSongPopThirty();
      } else {
        const songData = {
          artist: trackData.tracks[0].artists[0].name,
          trackId: trackData.tracks[0].id,
          link: trackData.tracks[0].external_urls.spotify,
          title: trackData.tracks[0].name,
        };

        setTrackURL(songData.link);
        setTrackPop(trackData.tracks[0].popularity);
        setReleaseDate(trackData.tracks[0].album.release_date);
        const inter =
          "https://open.spotify.com/embed/track/" + songData.trackId;
        setEmbedCode(inter);
        setCurrentSong(songData);
        setArtist(songData.artist);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetSongPopThirty = async () => {
    try {
      const response = await getSpotifyToken();
      const data = await response.json();
      const token = data.access_token;
      const pop = 30;

      if (!token) {
        throw new Error("something went wrong!");
      }

      const result = await getRecTrack(token, pop);
      const trackData = await result.json();
      console.log(trackData);
      if (trackData.tracks.length === 0) {
        handleGetSongPopForty();
      } else {
        const songData = {
          artist: trackData.tracks[0].artists[0].name,
          trackId: trackData.tracks[0].id,
          link: trackData.tracks[0].external_urls.spotify,
          title: trackData.tracks[0].name,
        };

        setTrackURL(songData.link);
        setTrackPop(trackData.tracks[0].popularity);
        setReleaseDate(trackData.tracks[0].album.release_date);
        const inter =
          "https://open.spotify.com/embed/track/" + songData.trackId;
        setEmbedCode(inter);
        setCurrentSong(songData);
        setArtist(songData.artist);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetSongPopForty = async () => {
    try {
      const response = await getSpotifyToken();
      const data = await response.json();
      const token = data.access_token;
      const pop = 40;

      if (!token) {
        throw new Error("something went wrong!");
      }

      const result = await getRecTrack(token, pop);
      const trackData = await result.json();
      console.log(trackData);
      if (trackData.tracks.length === 0) {
        console.log("nothing below pop 40");
      } else {
        const songData = {
          artist: trackData.tracks[0].artists[0].name,
          trackId: trackData.tracks[0].id,
          link: trackData.tracks[0].external_urls.spotify,
          title: trackData.tracks[0].name,
        };

        setTrackURL(songData.link);
        setTrackPop(trackData.tracks[0].popularity);
        setReleaseDate(trackData.tracks[0].album.release_date);
        const inter =
          "https://open.spotify.com/embed/track/" + songData.trackId;
        setEmbedCode(inter);
        setCurrentSong(songData);
        setArtist(songData.artist);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveSong = async () => {
    console.log(currentSong);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      alert("Must be Signed in to Save Songs!");
      return;
    }

    try {
      const response = await saveSong({
        variables: { spotifysong: currentSong },
        update: (cache) => {
          const { me } = cache.readQuery({ query: GET_ME });
          cache.writeQuery({
            query: GET_ME,
            data: {
              me: {
                ...me,
                savedSpotifySongs: [...me.savedSpotifySongs, currentSong],
              },
            },
          });
        },
      });

      if (!response.ok) {
        throw new Error("something went wrong, prolly my fault!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (embedCode === "initial") {
    return (
      <div id="container">
        <button id="songBtn" className="bouncy" onClick={handleGetSong}>
          Get Song
        </button>
      </div>
    );
  } else {
    return (
      <div id="container">
        <button id="songBtn" className="bouncy" onClick={handleGetSong}>
          New Song
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
          <div id="songInfo">
            <h2>Artist: {artist}</h2>
            <h2>Popularity on Spotify: {trackPop}</h2>
            <h4 id="subtext">(Popularity is on a scale from 0-100)</h4>
            <h2>Release Date: {releaseDate}</h2>
          </div>
        </div>
        <br></br>
        <a id="trackLink" href={trackURL} target="_blank" rel="noreferrer">
          Listen On Spotify
        </a>

        {/* <button id="saveSongBtn" className="bouncy" onClick={handleSaveSong}>
          Save Song to Profile
        </button> */}
      </div>
    );
  }
}

export default Spotify;
