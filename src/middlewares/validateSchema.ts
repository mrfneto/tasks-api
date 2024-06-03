import { NextFunction, Request, Response } from "express";
import { AnyObjectSchema, ValidationError } from "yup";

export const validateSchema =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        const formattedErrors: { [key: string]: string } = {};
        error.inner.forEach((err) => {
          if (err.path) {
            formattedErrors[err.path] = err.message;
          }
        });
        res.status(400).json({ errors: formattedErrors });
      } else {
        res.status(400).json({ error: "Validation error" });
      }
    }
  };
