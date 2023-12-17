import React, { useState , useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import SideNavBar from "./components/sidenavbar/sidenavbar.jsx";
import Home from "./pages/Home/home.jsx";
import About from "./pages/About/about.jsx";
import Contact from "./pages/Contact/contact.jsx";
import Students from "./pages/Students/Students.jsx";
import Alumni from "./pages/Alumni/Alumni.jsx";
import Authentication from "./pages/Authentication/Authentication";
import ErrorPage from "./pages/Error/ErrorPage.jsx";
import Mode from "./components/mode/mode.jsx";
import Profile from "./pages/Fullprofile/profile.jsx";
import Footer from "./components/footer/footer.jsx";
import CrCell from "./pages/CRCell/CrCell.jsx";
import PlacementCell from "./pages/PlacementCell/PlacementCell.jsx";
import StudyMaterial from "./pages/StudyMaterial/StudyMaterial.jsx";

function App() {
  const [mode, setMode] = useState("light");
  const [isloggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Update the CSS variable based on the isLoggedIn state
    document.documentElement.style.setProperty(
      '--main-body-section-margin-left',
      isloggedin ? '17rem' : '1rem'
    );
  }, [isloggedin]);

  const links = isloggedin
    ? [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/students", element: <Students /> },
        { path: "/alumni", element: <Alumni /> },
        { path: "/profile", element: <Profile /> },
        { path: "/crcell", element: <CrCell /> },
        { path: "/placementcell", element: <PlacementCell /> },
        { path: "/studymaterial", element: <StudyMaterial /> },
      ]
    : [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/students", element: <Students /> },
      ];

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

  const Router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="main-body">
          <Navbar navLinks={navLinks} isloggedin={isloggedin} />
          {isloggedin && (
            <SideNavBar
              SideNavLinks={SideNavLinks}
              setisloggedin={setIsLoggedIn}
            />
          )}
        </div>
      ),
      errorElement: <ErrorPage />,
      children: links,
    },
    {
      path: "/auth",
      element: <Authentication setisloggedin={setIsLoggedIn} />,
    },
  ]);

  return (
    <div>
      <Mode mode={mode} setMode={setMode} />
      <RouterProvider router={Router} />
      <Footer />
    </div>
  );
}

export default App;
