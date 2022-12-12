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

    const ExistingEmail = await User.findOne({ email });
    if (ExistingEmail) {
      throw new Error("Email already exists");
    }

    const user = await User.create({ name, email });
    res.status(201).json({
      sucess: true,
      message: "user creates Sucessfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json({
      sucess: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      sucess: false,
      message: error.message,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const users = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({
      sucess: true,
      message: "user updates sucessfully ",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      sucess: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      sucess: true,
      message: "user deleted sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      sucess: false,
      message: error.message,
    });
  }
};
