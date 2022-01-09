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
