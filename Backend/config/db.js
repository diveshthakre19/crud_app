const mongoose = require("mongoose");

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
