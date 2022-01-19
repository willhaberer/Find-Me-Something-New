const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedSpotifySongs: [SpotifySong]
  }
  type SpotifySong {
    _id: ID
    artists: [String]
    trackId: String
    link: String
    title: String
  }
  type Auth {
    token: ID!
    profile: Profile
  }

  input SavedBookInput {
    artists: [String]
    trackId: String
    link: String
    title: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveSpotifySong(spotifysong: SavedSpotifySongInput): User
    removeSpotifySong(spotifySongId: String!): User
  }
`;

module.exports = typeDefs;
