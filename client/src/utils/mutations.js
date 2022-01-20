import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_SPOTIFY_SONG = gql`
  mutation saveSpotifysong($SpotifySong: SavedSpotifySongInput!) {
    saveSpotifySong(spotifysong: $spotifysong) {
      username
      email
      spotifySongCount
      savedSpotifySongs {
        artists
        trackId
        link
        title
      }
    }
  }
`;

export const REMOVE_SPOTIFY_SONG = gql`
  mutation removeSpotifySong($trackId: String!) {
    removeSpotifySong(trackId: $trackId) {
      username
      email
      spotifySongCount
      savedSpotifySongs {
        artists
        trackId
        link
        title
      }
    }
  }
`;
