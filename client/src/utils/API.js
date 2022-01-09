export const getVidId = () => {
  return true;
};

export const getYoutubeVid = async () => {
  const response = await fetch(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&part=statistics&maxResults=1&key=[key]"
  );

  return response;
};
