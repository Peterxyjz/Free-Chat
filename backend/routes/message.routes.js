import express from "express";
import { sendMessageController, getMessagesController } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute , getMessagesController);
router.post("/send/:id", protectRoute ,sendMessageController);


export default router;