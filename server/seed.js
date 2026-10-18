// Seed the alumni directory from the same JSON the client's demo mode uses.
// With SEED_DEMO_PASSWORD set it also adds one demo account that can sign in.
// Safe to re-run: rows upsert by email.
//
//   npm run seed            (reads CONNECTION_URL from server/.env)
import "dotenv/config";
import { readFile } from "node:fs/promises";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User from "./models/User.js";

const DEMO_EMAIL = "demo@example.com";
const { CONNECTION_URL, SEED_DEMO_PASSWORD } = process.env;

// Resolve the data path from server/, wherever the script starts from
process.chdir(import.meta.dirname);
const alumni = JSON.parse(
  await readFile("../client/src/data/alumni.json", "utf8")
);

if (!CONNECTION_URL) {
  console.error("Set CONNECTION_URL in server/.env");
  process.exit(1);
}

await mongoose.connect(CONNECTION_URL);

const profiles = [...alumni];
if (SEED_DEMO_PASSWORD) {
  profiles.push({
    name: "Demo Student",
    email: DEMO_EMAIL,
    batch: "2024-2026",
    passwordHash: await bcrypt.hash(SEED_DEMO_PASSWORD, 12),
  });
}

const result = await User.bulkWrite(
  profiles.map(profile => ({
    updateOne: {
      filter: { email: profile.email },
      update: { $set: profile },
      upsert: true,
    },
  }))
);

const demoNote = SEED_DEMO_PASSWORD
  ? ` + 1 demo account (${DEMO_EMAIL}, password from SEED_DEMO_PASSWORD)`
  : "; set SEED_DEMO_PASSWORD to add a demo account";
console.log(
  `Seeded ${alumni.length} alumni${demoNote} ` +
    `(${result.upsertedCount} inserted, ${result.modifiedCount} updated)`
);

await mongoose.disconnect();
