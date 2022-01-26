const { Schema } = require("mongoose");

const songSchema = new Schema({
  artist: {
    type: String,
    required: true,
  },
  trackId: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = songSchema;
