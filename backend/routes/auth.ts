import { Router } from "express";
import controllers from "../controllers/auth";
import validator from "../validators/auth";

const router = Router();

router.post("/signup", validator.signup, controllers.signup);
router.post("/login", validator.login, controllers.login);
router.post("/logout", controllers.logout);

export default router;