import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./pages/Home/home.jsx";
import About from "./pages/About/about.jsx";
import Contact from "./pages/Contact/contact.jsx";
import Authentication from "./pages/Authentication/Authentication";
import ErrorPage from "./pages/Error/ErrorPage.jsx";

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
      path: "/auth",
      element: <Authentication />,
    },
    
  ]);
  return <RouterProvider router={Router} />;
}

export default App;
