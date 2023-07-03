import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./pages/Home/home.jsx";
import About from "./pages/About/about.jsx";
import Contact from "./pages/Contact/contact.jsx";
import Authentication from "./pages/Authentication/Authentication";
import ErrorPage from "./pages/Error/ErrorPage.jsx";
import Connect from "./pages/Connect/Connect.jsx";
import { loader as userLoader } from "./pages/Connect/Connect";
import Mode from "./components/mode/mode.jsx";
import Profile from "./pages/Fullprofile/profile.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/connect",
          element: <Connect />,
          loader: userLoader,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Authentication />,
    },
  ]);
  return (
    <div>
      <Mode />
      <RouterProvider router={Router} />
      <Footer />
    </div>
  );
}

export default App;
