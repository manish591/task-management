import { Router } from "express";
import controllers from "../controllers/healthcheck";
import { authenticate } from "../middlewares/authenticate";

const router = Router();

router.get("/", authenticate, controllers.healthcheck);

export default router;
