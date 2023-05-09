import { Router } from "express";
import { getAllTraining, postTraining } from "../controllers/training";

const router = Router()

router. get("/", getAllTraining);
router.delete("/", postTraining)

export default router