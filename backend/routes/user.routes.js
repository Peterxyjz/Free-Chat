import express from "express";
import { getUserForSideBarController } from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", protectRoute, getUserForSideBarController)
export default router;