require("dotenv").config();
const express = require("express");
const app = express();
const connectToDB = require("./config/db");
const userRoutes = require("./route/userRoutes");

connectToDB();
app.use("/", userRoutes);

module.exports = app;
