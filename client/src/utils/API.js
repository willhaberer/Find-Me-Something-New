//youtube api
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

export const _getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + (clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
};
