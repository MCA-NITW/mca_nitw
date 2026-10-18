import { demoApi } from "./demo";

// `vite --mode demo` and the API-less Pages build run on bundled data.
// Everything else talks to the Express server: through the Vite proxy in
// development, or VITE_API_URL when the API lives on another host.
export const IS_DEMO = import.meta.env.MODE === "demo";
const API_URL = import.meta.env.VITE_API_URL || "";

const request = async (path, options = {}) => {
  const res = await fetch(`${API_URL}/api${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (res.status === 204) return null;
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const error = new Error(body.message || `Request failed (${res.status})`);
    error.status = res.status;
    throw error;
  }
  return body;
};

const serverApi = {
  getMe: async () => {
    try {
      return (await request("/auth/me")).user;
    } catch (error) {
      if (error.status === 401) return null;
      throw error;
    }
  },

  login: async credentials =>
    (
      await request("/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      })
    ).user,

  signup: async details =>
    (
      await request("/auth/signup", {
        method: "POST",
        body: JSON.stringify(details),
      })
    ).user,

  logout: () => request("/auth/logout", { method: "POST" }),

  listAlumni: async ({ q = "" } = {}) =>
    (await request(`/users?${new URLSearchParams({ q })}`)).users,
};

export const api = IS_DEMO ? demoApi : serverApi;
