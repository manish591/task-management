import { Router } from "express";
import authRouter from "../controllers/auth";

const router = Router();

router.get("/signup", authRouter.signup)

export default router;