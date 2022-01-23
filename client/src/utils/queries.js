import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      songsFound
      savedSpotifySongs {
        artists
        trackId
        title
        link
      }
    }
  }
`;
