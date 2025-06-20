import { Router } from "express";
import { insertRFIDLog } from "../controllers/checking.controllers";

const router = Router();

router.put("/", insertRFIDLog);

export default router;
