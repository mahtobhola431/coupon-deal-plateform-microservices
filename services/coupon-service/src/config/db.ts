import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.COUPON_MONGO_URI as string;

    await mongoose.connect(uri);

    console.log("Coupon DB connected");
  } catch (error) {
    console.error("Coupon DB connection failed", error);
    process.exit(1);
  }
};
