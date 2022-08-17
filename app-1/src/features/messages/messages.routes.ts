import { Router } from "express";
import * as controller from "./messages.controller";

const router = Router();

router.get("/send-message", controller.sendMessageController);

export default router;
