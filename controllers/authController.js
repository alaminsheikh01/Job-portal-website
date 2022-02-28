import User from "../model/userModel.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all valuse");
  }

  const user = await User.create({ name, email, password });
  res.status(StatusCodes.OK).json({ user });
};

const login = (req, res) => {
  res.send("login uesr");
};

const updateUser = (req, res) => {
  res.send("updateUser");
};

export { register, login, updateUser };
