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

function getRandomSeed() {
  var seedList = [
    //8485, 1:15
    {
      artist: "3LwiPwIJNshV4ItekGcIMo",
      track: "0TNFCRzOnlgu7W1K47sFnY",
      genre: "hyperpop",
    },
    //luke combs, when it rains
    {
      artist: "718COspgdWOnwOFpJHRZHS",
      track: "1mMLMZYXkMueg65jRRWG1l",
      genre: "country",
    },
    //aries, eta
    {
      artist: "3hOdow4ZPmrby7Q1wfPLEy",
      track: "7a5TsU5Nw3VPrR1HH7mHJN",
      genre: "emo%20rap%2C%20pop%20rap",
    },
    //yeat, sorry bout that
    {
      artist: "3qiHUAX7zY4Qnjx8TNUzVx",
      track: "4VHkjPgAis9JNfc1URn7zZ",
      genre: "vapor%20trap",
    },
    //deb never, sorry
    {
      artist: "55EarwWraRQY9diMo9Oeul",
      track: "0CvL2Y2RKLflLw7dBMemaF",
      genre: "indie%20pop%2C%20indie%20r%26b",
    },
  ];

  return seedList[Math.floor(Math.random() * seedList.length)];
}

export const getRecTrack = async (token) => {
  const limit = 1;
  const popularity = 20;
  const seed = getRandomSeed();
  const genre = seed.genre;
  const artist = seed.artist;
  const track = seed.track;
  const result = await fetch(
    `https://api.spotify.com/v1/recommendations?limit=${limit}&market=ES&seed_artists=${artist}&seed_genres=${genre}&seed_tracks=${track}&max_popularity=${popularity}`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );
  console.log(result);

  return result;
};
