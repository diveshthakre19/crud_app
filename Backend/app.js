require("dotenv").config();
const express = require("express");
const app = express();
const connectToDB = require("./config/db");
const userRoutes = require("./route/userRoutes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();
app.use("/", userRoutes);

module.exports = app;
