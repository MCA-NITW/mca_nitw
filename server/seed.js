// Seed the alumni directory from the same JSON the client's demo mode uses,
// plus one demo account that can sign in. Safe to re-run: rows upsert by email.
//
//   npm run seed            (reads CONNECTION_URL from server/.env)
import "dotenv/config";
import { readFile } from "node:fs/promises";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User from "./models/User.js";

const DEMO_EMAIL = "demo@example.com";
const DEMO_PASSWORD = process.env.SEED_DEMO_PASSWORD || "mcanitw-demo";

const alumni = JSON.parse(
  await readFile(
    new URL("../client/src/data/alumni.json", import.meta.url),
    "utf8"
  )
);

if (!process.env.CONNECTION_URL) {
  console.error("Set CONNECTION_URL in server/.env");
  process.exit(1);
}

await mongoose.connect(process.env.CONNECTION_URL);

const demoUser = {
  name: "Demo Student",
  email: DEMO_EMAIL,
  batch: "2024-2026",
  passwordHash: await bcrypt.hash(DEMO_PASSWORD, 12),
};

const result = await User.bulkWrite(
  [...alumni, demoUser].map(profile => ({
    updateOne: {
      filter: { email: profile.email },
      update: { $set: profile },
      upsert: true,
    },
  }))
);

console.log(
  `Seeded ${alumni.length} alumni + 1 demo account ` +
    `(${result.upsertedCount} inserted, ${result.modifiedCount} updated)`
);
console.log(`Sign in with ${DEMO_EMAIL} / ${DEMO_PASSWORD}`);

await mongoose.disconnect();
