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

export const UPDATE_SONGS_FOUND = gql`
  mutation updateSongsFound($userID: String!) {
    updateSongsFound(userID: $userID) {
      username
      songsFound
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
  mutation saveSpotifysong($spotifyTrackId: String!) {
    saveSpotifySong(spotifyTrackId: $spotifyTrackId) {
      username
      email
      spotifySongCount
    }
  }
`;

export const REMOVE_SPOTIFY_SONG = gql`
  mutation removeSpotifysong($spotifyTrackId: String!) {
    removeSpotifySong(spotifyTrackId: $spotifyTrackId) {
      username
      email
      spotifySongCount
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser() {
    removeSpotifySong() {
      username
      email
    }
  }
`;
