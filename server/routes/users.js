import { Router } from "express";
import rateLimit from "express-rate-limit";
import User from "../models/User.js";
import { requireAuth } from "../auth.js";

const router = Router();

const usersLimiter = rateLimit({ windowMs: 60 * 1000, limit: 60 });

const MAX_RESULTS = 100;
const SEARCH_FIELDS = ["name", "batch", "company", "designation", "location"];

// User input goes into a RegExp, so escape every metacharacter first
const escapeRegex = text => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// GET /api/users?q=amazon -> alumni directory, signed-in members only
router.get("/", usersLimiter, requireAuth, async (req, res) => {
  const q = typeof req.query.q === "string" ? req.query.q.trim() : "";
  const filter = q
    ? {
        $or: SEARCH_FIELDS.map(field => ({
          [field]: { $regex: escapeRegex(q.slice(0, 50)), $options: "i" },
        })),
      }
    : {};

  // Emails stay private; the directory only needs the public profile
  const users = await User.find(filter)
    .select("-email")
    .sort({ batch: -1, name: 1 })
    .limit(MAX_RESULTS);
  return res.json({ users });
});

export default router;
