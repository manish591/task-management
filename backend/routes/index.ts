import { Router } from "express";
import authRouter from "./auth";
import healthcheckRouter from "./healthcheck";
import tasksRouter from "./tasks";

const router = Router();

router.use("/auth", authRouter);
router.use("/healthcheck", healthcheckRouter);
router.use("/tasks", tasksRouter);

export default router;