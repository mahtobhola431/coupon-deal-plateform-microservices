import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

import app from "./app";

const PORT = process.env.COUPON_SERVICE_PORT || 4006;

app.listen(PORT, () => {
  console.log(`couponservice running on port ${PORT}`);
});
