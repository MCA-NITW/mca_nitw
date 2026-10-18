// Load server/.env before any module reads process.env
import "dotenv/config";
import mongoose from "mongoose";
import { createApp } from "./app.js";

const { CONNECTION_URL, JWT_SECRET } = process.env;
const PORT = process.env.PORT || 5000;

if (!CONNECTION_URL || !JWT_SECRET) {
  console.error("Set CONNECTION_URL and JWT_SECRET in server/.env");
  process.exit(1);
}

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    createApp().listen(PORT, () =>
      console.log(`Server running on port: ${PORT}`)
    )
  )
  .catch(error => {
    console.error(error.message);
    process.exit(1);
  });
