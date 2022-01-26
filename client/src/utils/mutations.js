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
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $songsFound: Int!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      songsFound: $songsFound
    ) {
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

export const UPDATE_SONGS_FOUND = gql`
  mutation updateSongsFound($userId: String!) {
    updateSongsFound(userId: $userId) {
      username
      songsfound
    }
  }
`;
