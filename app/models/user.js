const moongose = require("mongoose");

const UserScheme = new moongose.Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
    default: "http://image.com",
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = moongose.model("user", UserScheme);
