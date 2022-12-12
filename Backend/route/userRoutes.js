// url path using router
const express = require("express");
const { home, createUser, getUser } = require("../controller/usercontroller");
const router = express.Router();

app.get("/", home);
app.post("/createUser", createUser);
app.get("/getUser", getUser);

module.exports = router;
