import { Router } from "express";
import shopping from "./shopping"
import teachers from "./teachers"
import trainings from "./trainings"
import users from "./users"

const router = Router()

router.use("/shopping" , shopping)
router.use("/teachers", teachers)
router.use("/trainings", trainings)
router.use("/users", users)

export default router;
