import { Router } from "express";
import {
  getAllCoupons,
  getCouponById
} from "../controllers/coupon.controller";

const router = Router();

router.get("/", getAllCoupons);
router.get("/:id", getCouponById);

export default router;
