import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

// CLIENT_ORIGIN is a comma-separated allowlist. Cookies need an explicit
// origin (credentials: true rejects "*"), so unknown origins get no CORS
// headers at all.
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:3000")
  .split(",")
  .map(origin => origin.trim())
  .filter(Boolean);

export const createApp = () => {
  const app = express();

  // Behind Render or another proxy, trust its X-Forwarded-For so the rate
  // limiter keys on the real client IP
  if (process.env.TRUST_PROXY) {
    app.set("trust proxy", Number(process.env.TRUST_PROXY));
  }

  app.use(cors({ origin: allowedOrigins, credentials: true }));
  app.use(express.json({ limit: "100kb" }));
  app.use(cookieParser());

  app.get("/api/health", (req, res) => res.json({ ok: true }));
  app.use("/api/auth", authRoutes);
  app.use("/api/users", userRoutes);

  app.use((req, res) => res.status(404).json({ message: "Not found" }));

  // Express 5 forwards rejected async handlers here
  app.use((err, req, res, next) => {
    // Too late to send a JSON error; let Express close the connection
    if (res.headersSent) {
      return next(err);
    }
    if (err.type === "entity.parse.failed") {
      return res.status(400).json({ message: "Malformed JSON body" });
    }
    if (err.type === "entity.too.large") {
      return res.status(413).json({ message: "Request body too large" });
    }
    if (err.name === "ValidationError") {
      return res.status(400).json({ message: err.message });
    }
    if (err.code === 11000) {
      return res
        .status(409)
        .json({ message: "An account with this email exists" });
    }
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  });

  return app;
};
