const { Schema } = require("mongoose");

const songSchema = new Schema({
  artists: [
    {
      type: String,
    },
  ],

  // saved book id from GoogleBooks
  trackId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
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
