import { Router } from "express";
import controllers from "../controllers/healthcheck";

const router = Router();

router.get("/", controllers.healthcheck);

export default router;
