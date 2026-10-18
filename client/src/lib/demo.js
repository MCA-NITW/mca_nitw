// Demo mode: the GitHub Pages build has no API behind it, so these functions
// mirror the server's responses with bundled data. The session lives in
// sessionStorage and ends when the tab closes.
import alumni from "../data/alumni.json";

const KEY = "mca_demo_user";
const SEARCH_FIELDS = ["name", "batch", "company", "designation", "location"];

const readUser = () => {
  try {
    return JSON.parse(sessionStorage.getItem(KEY));
  } catch {
    return null;
  }
};

const saveUser = user => {
  sessionStorage.setItem(KEY, JSON.stringify(user));
  return user;
};

const checkPassword = password => {
  if (!password || password.length < 8) {
    throw new Error("Password must be 8 to 72 characters");
  }
};

const nameFromEmail = email =>
  email
    .split("@")[0]
    .split(/[._-]+/)
    .filter(Boolean)
    .map(part => part[0].toUpperCase() + part.slice(1))
    .join(" ") || "Demo Student";

export const demoApi = {
  getMe: async () => readUser(),

  login: async ({ email, password }) => {
    if (!email?.includes("@")) throw new Error("Wrong email or password");
    checkPassword(password);
    return saveUser({
      id: "demo",
      name: nameFromEmail(email),
      email,
      institute: "NIT Warangal",
    });
  },

  signup: async ({ name, email, password, batch }) => {
    if (!name || !email?.includes("@")) {
      throw new Error("Name and a valid email are required");
    }
    checkPassword(password);
    return saveUser({
      id: "demo",
      name,
      email,
      batch,
      institute: "NIT Warangal",
    });
  },

  logout: async () => sessionStorage.removeItem(KEY),

  listAlumni: async ({ q = "" } = {}) => {
    const needle = q.trim().toLowerCase();
    return alumni
      .filter(
        person =>
          !needle ||
          SEARCH_FIELDS.some(field =>
            person[field]?.toLowerCase().includes(needle)
          )
      )
      .map(({ email, ...profile }) => ({
        ...profile,
        id: email,
        institute: "NIT Warangal",
      }))
      .sort(
        (a, b) => b.batch.localeCompare(a.batch) || a.name.localeCompare(b.name)
      );
  },
};
