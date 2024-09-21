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
        children: [],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/admin",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/admin",
            element: <Navigate to="/admin/dashboard" replace />,
          },
          {
            path: "/admin/dashboard",
            element: <DashLayout />,
            children: [
              { index: true, element: <Dashboard /> },
              {
                path: "/admin/dashboard/user",
                element: <User />,
              },
              {
                path: "/admin/dashboard/design",
                element: <Design />,
              },
              {
                path: "/admin/dashboard/share",
                element: <Share />,
              },
              {
                path: "/admin/dashboard/preview",
                element: <Preview />,
              },
            ],
          },
        ],
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
