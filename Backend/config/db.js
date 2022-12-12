const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
const connectToDB = () => {
  mongoose
    .connect(MONGO_URI)
    .then((conn) => {
      console.log(`database connected sucessfully ${conn.connection.host}`);
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = connectToDB;
