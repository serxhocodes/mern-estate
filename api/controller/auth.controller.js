import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res,next) => {
    const { username,email, password } = req.body;
    const hashedpasswordd = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedpasswordd });
    try {
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      next(error);
    };
}
  