import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import controllers from "../controllers/users";

const router = Router();

router.get("/me", authenticate, controllers.getSelfdata);

export default router;