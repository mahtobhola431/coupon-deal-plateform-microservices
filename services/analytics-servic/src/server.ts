import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const PORT = process.env.API_GATEWAY_PORT || 4000;

app.listen(PORT, () => {
  console.log(`analytics service running on port ${PORT}`);
});
