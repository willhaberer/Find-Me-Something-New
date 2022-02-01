const { User, SpotifySong } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("spotifysongs");
      }
      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials!");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials!");
      }
      const token = signToken(user);
      return { token, user };
    },
    saveSpotifySong: async (parent, { spotifyTrackId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedSpotifySongs: spotifyTrackId } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Incorrect credentials!");
    },
    removeSpotifySong: async (parent, { spotifyTrackId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedSpotifySongs: spotifyTrackId } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Incorrect credentials!");
    },

    updateSongsFound: async (parent, { userID }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: userID },
        { $inc: { songsFound: 1 } }
      ).exec(function (err, db_res) {
        if (err) {
          throw err;
        } else {
          return updatedUser;
        }
      });
    },
  },
};

module.exports = resolvers;
