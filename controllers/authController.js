import User from "../model/userModel.js";

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: "there was an error" });
  }
};

const login = (req, res) => {
  res.send("login uesr");
};

const updateUser = (req, res) => {
  res.send("updateUser");
};

export { register, login, updateUser };
