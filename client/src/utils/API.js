import { getRandomSeed } from "./Seed";
//youtube api
var base64 = require("base-64");
require("dotenv").config();

function getRandomQuery() {
  var queryList = [
    "sailing",
    "basketball",
    "hockey",
    "weaving",
    "sewing",
    "cinnamon",
    "tuna",
    "shanty",
    "stroll",
    "candle",
    "fix",
    "IMG",
  ];

  return queryList[Math.floor(Math.random() * queryList.length)];
}

export const getVidId = async () => {
  const maxresults = 50;
  const query = getRandomQuery();
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${maxresults}&q=${query}&order=viewCount&key=[key]`
  );

  return response;
};

export const getYoutubeVidStats = async (id) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=statistics&id=${id}&key=[key]`
  );

  return response;
};

//spotify api
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

export const getSpotifyToken = async () => {
  const auth = base64.encode(clientId + ":" + clientSecret);
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + auth,
    },
    body: "grant_type=client_credentials",
  });

  return response;
};

export const getRecTrack = async (token, pop) => {
  const limit = 1;
  const popularity = pop;
  const seed = await getRandomSeed();
  const genre = seed.genre;
  const artist = seed.artist;
  const track = seed.track;
  const market = seed.market;
  const result = await fetch(
    `https://api.spotify.com/v1/recommendations?limit=${limit}&market=${market}&seed_artists=${artist}&seed_genres=${genre}&seed_tracks=${track}&max_popularity=${popularity}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  return result;
};

export const getTrackById = async (token, trackID) => {
  const result = await fetch(
    `https://api.spotify.com/v1/tracks/${trackID}?market=ES`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  return result;
};
