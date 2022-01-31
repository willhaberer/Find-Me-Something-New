const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://fmsn:oqlIcIACAQrIh85G@cluster0.lq4uh.mongodb.net/fmsnData?retryWrites=true&w=majority" ||
    "mongodb://localhost/fmsn",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
