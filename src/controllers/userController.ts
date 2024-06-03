import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel";
import env from "../utils/validateEnv";

const generateToken = (id: String) => {
  return jwt.sign({ userId: id }, env.jwtSecret, {
    expiresIn: "1h",
  });
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (await userModel.findOne({ email })) {
      res.status(400).json({ error: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name: name,
      email: email,
      password: hashPassword,
    });

    user.password = "";
    const token = generateToken(user.id);

    res.status(201).json({ user: user, token: token });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }
    const token = generateToken(user.id);
    user.password = "";
    res.status(200).json({ user: user, token: token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const me = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const user = await userModel.find({ _id: userId }).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
