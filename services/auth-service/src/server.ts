import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

import app from "./app";

const PORT = process.env.AUTH_SERVICE_PORT|| 4005;

app.listen(PORT, () => {
  console.log(`auth service running on port ${PORT}`);
});
