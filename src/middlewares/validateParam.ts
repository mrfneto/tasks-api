import { Request, Response, NextFunction } from "express";
import * as yup from "yup";

const objectIdSchema = yup
  .string()
  .matches(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId format");

export const validateParam =
  (param: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await objectIdSchema.validate(req.params[param]);
      next();
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        res.status(400).json({ error: { [param]: error.message } });
      } else {
        res.status(400).json({ error: "Validation error" });
      }
    }
  };
