import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./features/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import Notfound from "./features/Notfound";
import DashLayout from "./layout/Dashboard/DashLayout";
import Design from "./pages/Design";
import Share from "./pages/Share";
import Preview from "./pages/Preview";
import User from "./pages/User";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "admin",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Navigate to="dashboard" replace />, // Only when exactly "/admin"
          },
          {
            path: "dashboard",
            element: <DashLayout />,
            children: [
              { index: true, element: <Dashboard /> },
              {
                path: "user", // No leading slash here
                element: <User />,
              },
              {
                path: "design",
                element: <Design />,
              },
              {
                path: "share",
                element: <Share />,
              },
              {
                path: "preview",
                element: <Preview />,
              },
            ],
          },
        ],
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
