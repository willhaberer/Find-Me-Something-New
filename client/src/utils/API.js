//youtube api
var base64 = require("base-64");

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
      market: "ES",
    },
    //aries, eta
    {
      artist: "3hOdow4ZPmrby7Q1wfPLEy",
      track: "7a5TsU5Nw3VPrR1HH7mHJN",
      genre: "emo",
      market: "ES",
    },
    //brackence, ginger tea
    {
      artist: "4kqFrZkeqDfOIEqTWqbOOV",
      track: "6GVW5k7CvUbUCt10bSUIIW",
      genre: "emo",
      market: "ES",
    },
    //deb never, sorry
    {
      artist: "55EarwWraRQY9diMo9Oeul",
      track: "0CvL2Y2RKLflLw7dBMemaF",
      genre: "pop",
      market: "ES",
    },
    //evisbeats, can you see it, japanese market
    {
      artist: "3dkhk6RTgOerN0NQEmt8Nc",
      track: "0kTC9iCNOcwuQOkQGGUh1J",
      genre: "j-rap",
      market: "JP",
    },
    //evisbeats, can you see it, english market
    {
      artist: "3dkhk6RTgOerN0NQEmt8Nc",
      track: "0kTC9iCNOcwuQOkQGGUh1J",
      genre: "j-rap",
      market: "ES",
    },
    //guardin, it rained and it poured
    {
      artist: "6zqcGQ6MH6yetBUoquMnL7",
      track: "43vw4OMZIpjQ4KKcIWKVcl",
      genre: "lo-fi",
      market: "ES",
    },
    //kanye, ultralight beam
    {
      artist: "5K4W6rqBFWDnAN6FQUkS6x",
      track: "1eQBEelI2NCy7AUTerX0KS",
      genre: "r%26b",
      market: "ES",
    },
    //luke combs, when it rains
    {
      artist: "718COspgdWOnwOFpJHRZHS",
      track: "1mMLMZYXkMueg65jRRWG1l",
      genre: "country",
      market: "ES",
    },
    //slush puppy, eat spit
    {
      artist: "58eJhHRICp87T2IFcP0bYh",
      track: "6GVW5k7CvUbUCt10bSUIIW",
      genre: "glitchcore",
      market: "ES",
    },
    //wet, larabar
    {
      artist: "2i9uaNzfUtuApAjEf1omV8",
      track: "40AqvlNZuYdCyo9gbCzOlw",
      genre: "indie",
      market: "ES",
    },
  ];

  return seedList[Math.floor(Math.random() * seedList.length)];
}

export const getRecTrack = async (token, pop) => {
  const limit = 1;
  const popularity = pop;
  const seed = getRandomSeed();
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
  // const result = await fetch(
  //   `https://api.spotify.com/v1/recommendations?limit=${limit}&market=ES&seed_artists=${artist}&seed_tracks=${track}&max_popularity=${popularity}`,
  //   {
  //     method: "GET",
  //     headers: { Authorization: "Bearer " + token },
  //   }
  // );

  return result;
};
