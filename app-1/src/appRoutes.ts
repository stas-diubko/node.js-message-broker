import { Router } from "express";
import messages from "./features/messages/messages.routes";

const router = Router();

router.use("/messages", messages);

export default router;
