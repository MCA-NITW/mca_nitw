import jwt from "jsonwebtoken";

export const COOKIE_NAME = "mca_session";
const SESSION_DAYS = 7;

// Same-site setups (Vite proxy, one domain) work with "lax". A client on
// github.io talking to an API on another domain needs "none", which browsers
// only accept together with Secure.
const sameSite = process.env.COOKIE_SAMESITE || "lax";

const cookieOptions = () => ({
  httpOnly: true,
  sameSite,
  secure: sameSite === "none" || process.env.NODE_ENV === "production",
  path: "/",
});

export const setSessionCookie = (res, userId) => {
  const token = jwt.sign({ sub: userId }, process.env.JWT_SECRET, {
    expiresIn: `${SESSION_DAYS}d`,
  });
  res.cookie(COOKIE_NAME, token, {
    ...cookieOptions(),
    maxAge: SESSION_DAYS * 24 * 60 * 60 * 1000,
  });
};

export const clearSessionCookie = res => {
  res.clearCookie(COOKIE_NAME, cookieOptions());
};

export const requireAuth = (req, res, next) => {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token) {
    return res.status(401).json({ message: "Not signed in" });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.sub;
    return next();
  } catch {
    clearSessionCookie(res);
    return res.status(401).json({ message: "Session expired" });
  }
};
