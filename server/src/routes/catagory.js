import express from "express";

import { create, get, getAll } from "../controllers/category";

const router = express.Router();
router.get("/categories", getAll);
router.get("/categories/:id", get);
router.post("/categories", create);

export default router;
