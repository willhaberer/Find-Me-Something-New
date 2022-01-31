const mongoose = require("mongoose");

mongoose.connect(
  process.env.REACT_APP_MONGODB_URI || "mongodb://localhost/fmsn",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
