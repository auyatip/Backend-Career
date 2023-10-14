const User = require("../models/user");

//GET USER
exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find(req.query);
    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(400).json({ error: "cannot get user" });
  }
};

//CREATE USER
exports.addUser = async (req, res) => {
  try {
    const { name, lastname, position } = req.body;
    const newUser = await User.create(req.body);

    return res.status(200).json({
      success: true,
      msg: "create user success.",
      newUser,
    });
  } catch (error) {
    res.status(400).json({ error: "cannot Create new user" });
  }
};

//EDIT USER
exports.updateUser = async (req, res) => {
  try {
    const { name, lastname, position } = req.body;
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "User Updated!",
      user,
    });
  } catch (error) {
    res.status(400).json({ error: "cannot Update user" });
  }
};

//DELETE USER
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "User Deleted.!",
    });
  } catch (error) {
    res.status(400).json({ error: "cannot Delete user" });
  }
};
