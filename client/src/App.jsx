import React, { useState, useEffect, useMemo } from "react";
import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import Navbar from "./components/navbar/navbar.jsx";
import SideNavBar from "./components/sidenavbar/sidenavbar.jsx";
import Home from "./pages/home/home.jsx";
import About from "./pages/about/about.jsx";
import Contact from "./pages/contact/contact.jsx";
import Students from "./pages/Students/Students.jsx";
import Alumni, { loader as alumniLoader } from "./pages/Alumni/Alumni.jsx";
import Authentication from "./pages/Authentication/Authentication";
import ErrorPage from "./pages/Error/ErrorPage.jsx";
import Mode from "./components/mode/mode.jsx";
import Profile from "./pages/Fullprofile/profile.jsx";
import Footer from "./components/footer/footer.jsx";
import CrCell from "./pages/CRCell/CrCell.jsx";
import PlacementCell from "./pages/PlacementCell/PlacementCell.jsx";
import StudyMaterial from "./pages/StudyMaterial/StudyMaterial.jsx";
import { fallback } from "./Layout/fallback";
import { api } from "./lib/api";

// Vite's BASE_URL is "/mca_nitw/" on Pages and "/" locally
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

const navLinks = [
  { id: 1, to: "/", name: "Home" },
  { id: 2, to: "/about", name: "About" },
  { id: 3, to: "/contact", name: "Contact" },
  { id: 4, to: "/students", name: "Students" },
];

const SideNavLinks = [
  { id: 1, to: "/profile", name: "Your Profile" },
  { id: 2, to: "/crcell", name: "CR Cell" },
  { id: 3, to: "/placementcell", name: "Placement Cell" },
  { id: 4, to: "/alumni", name: "Alumni" },
  { id: 5, to: "/studymaterial", name: "Study Material" },
];

const publicRoutes = [
  { index: true, element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/students", element: <Students /> },
];

const memberRoutes = [
  { path: "/alumni", element: <Alumni />, loader: alumniLoader },
  { path: "/profile", element: <Profile /> },
  { path: "/crcell", element: <CrCell /> },
  { path: "/placementcell", element: <PlacementCell /> },
  { path: "/studymaterial", element: <StudyMaterial /> },
];

// Signed out, a member route sends you to login and back again afterwards
const signInFirst = memberRoutes.map(({ path }) => ({
  path,
  loader: () => redirect(`/auth?mode=login&next=${encodeURIComponent(path)}`),
}));

function App() {
  const [mode, setMode] = useState("light");
  const [user, setUser] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);
  // Bumped on every sign-in and sign-out; the router is rebuilt only then
  const [session, setSession] = useState(0);
  const isloggedin = Boolean(user);

  // Restore the session from the httpOnly cookie (or demo storage) on load
  useEffect(() => {
    api
      .getMe()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setCheckingSession(false));
  }, []);

  useEffect(() => {
    // Update the CSS variable based on the isLoggedIn state
    document.documentElement.style.setProperty(
      "--main-body-section-margin-left",
      isloggedin ? "17rem" : "1rem"
    );
  }, [isloggedin]);

  // Rebuild the router only when someone signs in or out, not on every
  // render (theme toggles used to create a fresh router each time). Wait for
  // the session check first: creating the router runs loaders right away, and
  // a signed-in deep link to /alumni would bounce to login.
  const Router = useMemo(() => {
    if (checkingSession) return null;

    // Point the URL at the page to land on, then flip the state; the rebuilt
    // router starts from window.location. Navigating the old router instead
    // would hit its sign-in redirects.
    const signIn = (signedInUser, next) => {
      const target =
        next?.startsWith("/") && !next.startsWith("//") ? next : "/";
      const prefix = basename === "/" ? "" : basename;
      window.history.replaceState(null, "", prefix + target);
      setUser(signedInUser);
      setSession(n => n + 1);
    };

    const logout = async () => {
      await api.logout().catch(() => {});
      setUser(null);
      setSession(n => n + 1);
    };

    return createBrowserRouter(
      [
        {
          path: "/",
          element: (
            <div className="main-body">
              <Navbar navLinks={navLinks} isloggedin={isloggedin} />
              {isloggedin && (
                <SideNavBar SideNavLinks={SideNavLinks} onLogout={logout} />
              )}
            </div>
          ),
          errorElement: <ErrorPage />,
          children: [
            ...publicRoutes,
            ...(isloggedin ? memberRoutes : signInFirst),
          ],
        },
        {
          path: "/auth",
          element: <Authentication onAuthenticated={signIn} />,
        },
      ],
      { basename }
    );
  }, [session, checkingSession, isloggedin]);
  return (
    <div>
      <Mode mode={mode} setMode={setMode} />
      {/* RouterProvider keeps the first router's state; remount it when the
          router is swapped so a route with no loader still renders fresh */}
      {Router ? <RouterProvider key={session} router={Router} /> : fallback}
      <Footer />
    </div>
  );
}

export default App;
