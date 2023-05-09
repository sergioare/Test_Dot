import { getTeacherById , logicalDeletion } from "../controllers/users/getTeacher";
import { Router } from "express";

const router = Router()

router. get("/:id", getTeacherById);
router.delete("/:id", logicalDeletion)

export default router
