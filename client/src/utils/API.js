//youtube api
var base64 = require("base-64");

export const getVidId = async () => {
  const response = await fetch(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&key=[Key]"
  );

  return response;
};

export const getYoutubeVid = async (id) => {
  const response = await fetch(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&key=[Key]"
  );

  return response;
};

//spotify api
const clientId = "temp";
const clientSecret = "temp";
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

function getRandomGenre() {
  var genreList = [
    "pop",
    "rap",
    "country",
    "emo",
    "jazz",
    "trap",
    "house",
    "latin",
    "rock",
    "edm",
    "k-pop",
  ];

  return genreList[Math.floor(Math.random() * (genreList.length - 1))];
}

function getRandomArtistId() {
  var artistList = [
    "245PKF3hKjtxJKIG153kF0",
    "r4kqFrZkeqDfOIEqTWqbOOV",
    "3hOdow4ZPmrby7Q1wfPLEy",
    "55EarwWraRQY9diMo9Oeul",
    "j0YHgnSkV3S5mvSSCTRWDi5",
    "2qDIR2WlcW3llkGqJWg9VJ",
    "4oUHIQIBe0LHzYfvXNW4QM",
    "718COspgdWOnwOFpJHRZHS",
    "6KAgrAiCdJPDucMqR1kvMn",
    "4cJKDGSv4Dz9QycXYmo565",
    "6zqcGQ6MH6yetBUoquMnL7",
    "3dkhk6RTgOerN0NQEmt8Nc",
  ];

  return artistList[Math.floor(Math.random() * (artistList.length - 1))];
}

function getRandomTrackId() {
  var trackList = [
    "1bV0Yu3Hm7RhHUKB6ATnlq",
    "4GRLGjwgWzZ33HQU3BIdH9",
    "0c6xIDDpzE81m2q797ordA",
  ];

  return trackList[Math.floor(Math.random() * (trackList.length - 1))];
}

export const getRecTrack = async (token) => {
  const limit = 1;
  const genre = getRandomGenre();
  const artist = getRandomArtistId();
  const track = getRandomTrackId();
  const result = await fetch(
    `https://api.spotify.com/v1/recommendations?limit=${limit}&market=ES&seed_artists=${artist}&seed_genres=${genre}&seed_tracks=${track}&max_popularity=5`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );
  console.log(result);

  return result;
};
