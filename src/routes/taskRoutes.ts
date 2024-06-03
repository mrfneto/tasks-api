import { Response, Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { validateSchema } from "../middlewares/validateSchema";
import {
  destroy,
  index,
  show,
  store,
  update,
} from "../controllers/taskController";
import { taskSchema } from "../validators/taskSchemas";
import { validateParam } from "../middlewares/validateParam";

const router = Router();

router.post("/", authMiddleware, validateSchema(taskSchema), store);
router.get("/", authMiddleware, index);
router.get("/:id", validateParam("id"), authMiddleware, show);
router.put(
  "/:id",
  validateParam("id"),
  validateSchema(taskSchema),
  authMiddleware,
  update
);
router.delete("/:id", validateParam("id"), authMiddleware, destroy);

export default router;
