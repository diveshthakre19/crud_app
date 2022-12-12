// url path using router
const express = require("express");
const {
  home,
  createUser,
  getUser,
  editUser,
  deleteUser,
} = require("../controller/usercontroller");
const router = express.Router();
router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUser", getUser);
router.put("/editUSer/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);
module.exports = router;
