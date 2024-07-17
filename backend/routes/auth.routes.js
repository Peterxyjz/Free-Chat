import express from "express";
import { loginController, logoutController, registerController } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerController)

router.post("/login", loginController)

router.post("/logout", logoutController)

export default router;