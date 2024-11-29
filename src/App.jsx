import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import DashBoard from "./components/pages/dashboard";
import ContactForm from "./components/pages/contactus";
import LandingPage from "./components/pages/LandingPage/Landingpage";
import RegistrationForm from "./components/pages/RegistrationForm";
import OurEvents from "./components/pages/Ourevent";
import { AppLayout } from "./components/layout/AppLayout";
import Event from "./components/pages/algoolympics";
import LoginPage from "./components/pages/Login";
import Registration from "./components/pages/RegistrationForm";
import CreateTeam from "./components/pages/CreateTeam";
import Admin from "./components/pages/Admin/AdminPanel";
import Profile from "./components/pages/Profile";
import RoleProtectedRoute from "./ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status
    const user = JSON.parse(localStorage.getItem("user"));
    setIsLoggedIn(!!user); // If user exists, set to true
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/events",
          element: <OurEvents />,
        },
        {
          path: "/events/eve",
          element: <Event />,
        },
        {
          path: "/admin",
          element: (
            <RoleProtectedRoute requiredRole={["Superadmin"]}>
              <Admin />
            </RoleProtectedRoute>
          ),
        },
        {
          path: "/team",
          element: (
            <RoleProtectedRoute requiredRole={["Team Leader"]}>
              <LandingPage />
            </RoleProtectedRoute>
          ),
        },
        {
          path: "/createTeam",
          element: (
            <RoleProtectedRoute requiredRole={["Team Leader"]}>
              <CreateTeam />
            </RoleProtectedRoute>
          ),
        },
        {
          path: "/signup",
          element: <Registration />,
        },
        {
          path: "/contact",
          element: <ContactForm />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/dashboard",
          element: (
            
              <DashBoard />
        
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
