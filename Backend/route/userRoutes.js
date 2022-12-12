// url path using router
const express = require("express");
const { home, createUser } = require("../controller/usercontroller");
const router = express.Router();

app.get("/", home);
app.get("/", createUser);
module.exports = router;
