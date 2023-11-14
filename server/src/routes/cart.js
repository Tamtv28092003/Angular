import express from "express";
import { authenticate } from "../middlewares/authenticate";
import { addToCart, getCart, getCarts } from "../controllers/cart";

const router = express.Router();

router.get("/cart/user", authenticate, getCart);
router.get("/cart", getCarts);
router.post("/cart/add", authenticate, addToCart);


export default router;