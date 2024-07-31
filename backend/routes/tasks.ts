import { Router } from "express";

import { authenticate } from "../middlewares/authenticate";
import validator from "../validators/tasks";
import controllers from "../controllers/tasks";

const router = Router();

router.post("/", authenticate, validator.createTask, controllers.createTask);
router.put("/:taskId", authenticate, validator.updateTask, controllers.updateTaks);
router.get("/", authenticate, controllers.getAllTasks);
router.delete("/:taskId", authenticate, controllers.deleteTask);

export default router;