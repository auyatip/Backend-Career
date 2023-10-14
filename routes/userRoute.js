const express = require("express");
const {
  getAllUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

//GET USER ALL
router.get("/", getAllUser);

//ADD USER
router.post("/create", addUser);

//Update User
router.put("/update/:id", updateUser);

//Delete User
router.delete("/delete/:id", deleteUser);

module.exports = router;
