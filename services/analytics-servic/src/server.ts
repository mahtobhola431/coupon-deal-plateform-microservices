import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

import app from "./app";

const PORT = process.env.ANALYTICS_SERVICE_PORT || 4006;

app.listen(PORT, () => {
  console.log(`Analytics Service running on port ${PORT}`);
});
