const mongoose = require("mongoose");
const DB_URI = "mongodb://localhost:27017/tonito";

module.exports = () => {
  const connect = () => {
    mongoose.connect(DB_URI);

    mongoose.connection.on("error", (err) => {
      console.error("DB connection error:", err);
    });

    mongoose.connection.once("open", () => {
      console.log("DB connection successful");
    });
  };

  connect();
};
