import { Router } from "express";
import bcrypt from "bcryptjs";
import rateLimit from "express-rate-limit";
import User from "../models/User.js";
import { clearSessionCookie, requireAuth, setSessionCookie } from "../auth.js";

const router = Router();

// Signup and login are the brute-force targets, so they get a tight budget
const credentialLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  message: { message: "Too many attempts, try again in 15 minutes" },
});

// The client asks /me on every page load, so a looser per-minute budget
const sessionLimiter = rateLimit({ windowMs: 60 * 1000, limit: 120 });

const MAX_EMAIL = 120;
const MIN_PASSWORD = 8;
// bcrypt only reads the first 72 bytes; the cap also bounds hashing cost
const MAX_PASSWORD = 72;
const BCRYPT_ROUNDS = 12;

// Plain string checks instead of a regex: no backtracking on hostile input
const isEmail = value => {
  const at = value.indexOf("@");
  return (
    value.length <= MAX_EMAIL &&
    !/\s/.test(value) &&
    at > 0 &&
    at === value.lastIndexOf("@") &&
    value.indexOf(".", at) > at + 1 &&
    !value.endsWith(".")
  );
};

const readCredentials = body => ({
  email: typeof body?.email === "string" ? body.email.trim().toLowerCase() : "",
  password: typeof body?.password === "string" ? body.password : "",
});

router.post("/signup", credentialLimiter, async (req, res) => {
  const { email, password } = readCredentials(req.body);
  const name = typeof req.body?.name === "string" ? req.body.name.trim() : "";
  const batch =
    typeof req.body?.batch === "string" ? req.body.batch.trim() : "";

  if (!name || !isEmail(email)) {
    return res
      .status(400)
      .json({ message: "Name and a valid email are required" });
  }
  if (password.length < MIN_PASSWORD || password.length > MAX_PASSWORD) {
    return res.status(400).json({
      message: `Password must be ${MIN_PASSWORD} to ${MAX_PASSWORD} characters`,
    });
  }
  if (await User.exists({ email })) {
    return res
      .status(409)
      .json({ message: "An account with this email exists" });
  }

  const passwordHash = await bcrypt.hash(password, BCRYPT_ROUNDS);
  const user = await User.create({
    name,
    email,
    passwordHash,
    batch: batch || undefined,
  });
  setSessionCookie(res, user.id);
  return res.status(201).json({ user });
});

router.post("/login", credentialLimiter, async (req, res) => {
  const { email, password } = readCredentials(req.body);
  const user = email
    ? await User.findOne({ email }).select("+passwordHash")
    : null;
  const ok =
    user?.passwordHash && (await bcrypt.compare(password, user.passwordHash));

  // One message for unknown email and wrong password, so the endpoint does
  // not reveal which emails have accounts
  if (!ok) {
    return res.status(401).json({ message: "Wrong email or password" });
  }
  setSessionCookie(res, user.id);
  return res.json({ user });
});

router.post("/logout", (req, res) => {
  clearSessionCookie(res);
  res.status(204).end();
});

router.get("/me", sessionLimiter, requireAuth, async (req, res) => {
  const user = await User.findById(req.userId);
  if (!user) {
    clearSessionCookie(res);
    return res.status(401).json({ message: "Account no longer exists" });
  }
  return res.json({ user });
});

export default router;
