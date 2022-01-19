const { Schema } = require("mongoose");

const songSchema = new Schema({
  artists: [
    {
      type: String,
    },
  ],
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
