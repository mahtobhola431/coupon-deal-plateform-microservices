import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import couponRoutes from "./routes/coupon.routes";

const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "OK", service: "coupon-service" });
});
app.use("/coupons", couponRoutes);

export default app;
