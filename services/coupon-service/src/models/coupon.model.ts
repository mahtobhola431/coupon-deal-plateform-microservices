import mongoose, { Schema, Document } from "mongoose";

export interface ICoupon extends Document {
  title: string;
  description: string;
  category: string;
  redirectUrl: string;
  expiryDate: Date;
  isActive: boolean;
}

const CouponSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    redirectUrl: { type: String, required: true },
    expiryDate: { type: Date, required: true },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model<ICoupon>("Coupon", CouponSchema);
