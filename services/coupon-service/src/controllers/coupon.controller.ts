import { Request, Response } from "express";
import Coupon from "../models/coupon.model";

// GET /coupons
export const getAllCoupons = async (_req: Request, res: Response) => {
  try {
    const today = new Date();

    const coupons = await Coupon.find({
      isActive: true,
      expiryDate: { $gte: today }
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: coupons.length,
      data: coupons
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch coupons"
    });
  }
};

// GET /coupons/:id
export const getCouponById = async (req: Request, res: Response) => {
  try {
    const coupon = await Coupon.findById(req.params.id);

    if (!coupon) {
      return res.status(404).json({
        success: false,
        message: "Coupon not found"
      });
    }

    if (coupon.expiryDate < new Date()) {
      return res.status(410).json({
        success: false,
        message: "Coupon expired"
      });
    }

    res.status(200).json({
      success: true,
      data: coupon
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid coupon ID"
    });
  }
};
