import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./pages/home/home.jsx";
import About from "./pages/about/about.jsx";
import Contact from "./pages/contact/contact.jsx";
import Signinup from "./pages/signinup/signinup.jsx";
import ErrorPage from "./pages/errorpage/ErrorPage.jsx";

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
      ],
    },
    {
      path: "/signin",
      element: <Signinup />,
    },
  ]);
  return <RouterProvider router={Router} />;
}

export default App;
