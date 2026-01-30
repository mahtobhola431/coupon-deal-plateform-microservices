

import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { SERVICES } from "./config/services";

const app = express();
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "OK", service: "api-gateway" });
});

app.use(
  "/auth",
  createProxyMiddleware({
    target: SERVICES.AUTH,
    changeOrigin: true,
  })
);

app.use(
  "/coupons",
  createProxyMiddleware({
    target: SERVICES.COUPON,
    changeOrigin: true,
  })
);

app.use(
  "/analytics",
  createProxyMiddleware({
    target: SERVICES.ANALYTICS,
    changeOrigin: true,
  })
);

export default app;
