export const getYoutubeVid = () => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
