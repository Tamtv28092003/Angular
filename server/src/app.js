import express from "express";
import productRouter from "./routes/product";
import authRouter from "./routes/auth";
import categoryRouter from "./routes/catagory";
import cartRouter from "./routes/cart";
import mongoose from "mongoose";
import cors from "cors"


const app = express();
app.use(cors());
//middleware

app.use(express.json());

// router
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);
app.use("/api", cartRouter);


mongoose.connect("mongodb://127.0.0.1:27017/angular");

export const viteNodeApp = app;
