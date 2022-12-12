const mongoose = require("mongoose");
const userSchema = new mongoose.schema({
  name: {
    type: String,
    trim: true,
    require: [true, "name is required "],
    maxlength: [25, "name shoud be less than 25 character"],
  },
  email: {
    type: String,
    unique: [true, "email already exists"],
    require: true,
  },
});

module.exports = mongoose.model("user", userSchema);
