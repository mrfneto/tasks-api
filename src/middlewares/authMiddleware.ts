import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import env from "../utils/validateEnv";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;

  if (!header) return res.status(401).json({ error: "No token provided" });

  const token = header.split(" ")[1];
  try {
    const decoded: any = jwt.verify(token, env.jwtSecret);
    req.userId = decoded.userId;
    next();
  } catch (error: unknown) {
    res.status(401).send({ error: "Invalid token" });
  }
};
