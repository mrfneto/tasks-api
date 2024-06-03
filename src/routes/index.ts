import { Router } from "express";
import {
  login,
  // me,
  // register
} from "../controllers/userController";
// import { authMiddleware } from "../middlewares/authMiddleware";
import { validateSchema } from "../middlewares/validateSchema";
import { loginSchema, registrationSchema } from "../validators/userSchemas";
import taskRouter from "./taskRoutes";

const router = Router();

// router.post("/register", validateSchema(registrationSchema), register);
router.post("/login", validateSchema(loginSchema), login);
// router.get("/me", authMiddleware, me);

router.use("/tasks", taskRouter);

export default router;
