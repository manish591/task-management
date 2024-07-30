import { Router } from "express";
import authRouter from "./auth";
import healthcheckRouter from "./healthcheck";

const router = Router();

router.use("/auth", authRouter);
router.use("/healthcheck", healthcheckRouter);

export default router;