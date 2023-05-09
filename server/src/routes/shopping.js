import { postShoppingCart } from "../controllers/shopping";
import { Router } from "express";

const router = Router()

router.post("/", postShoppingCart);

export default router

