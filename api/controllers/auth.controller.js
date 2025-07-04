import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword, // In a real application, you should hash the password before saving it
  });
  // Here you would typically save the user to the database
  await newUser.save();
  res.status(201).json("User created successfully");
};
