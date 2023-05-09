import { Router } from "express";
import { createUser } from "../controllers/users/createUser";
import { deleteUser } from "../controllers/users/deleteUser";

const router = Router()

router.post("/", createUser)
router.delete("/:id", deleteUser)

export default router
