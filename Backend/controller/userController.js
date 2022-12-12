// buisness logic is written here
const User = require("../model/userSchema");

exports.home = (req, res) => {
  res.status(201).send("hello from Home Route");
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!(name, email)) {
      throw new Error("All fields are required");
    }

    const ExistingEmail = await User.findOne(email);
    if (ExistingEmail) {
      throw new Error("Email already exists");
    }

    const user = await User.send({ name, email });
    res.status(201).json({
      sucess: true,
      message: "user creates Sucessfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
