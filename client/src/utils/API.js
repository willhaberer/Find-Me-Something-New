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
