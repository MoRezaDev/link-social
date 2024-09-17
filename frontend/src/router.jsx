import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./features/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import Notfound from "./features/Notfound";
import DashLayout from "./layout/Dashboard/DashLayout";
import Links from "./pages/Links";
import Design from "./pages/Design";
import Share from "./pages/Share";
import Preview from "./pages/Preview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            element: <Navigate to="/dashboard" replace />,
          },
          {
            path: "dashboard",
            element: <DashLayout />,
            children: [
              { index: true, element: <Dashboard /> },
              {
                path: "/dashboard/links",
                element: <Links />,
              },
              {
                path: "/dashboard/design",
                element: <Design />,
              },
              {
                path: "/dashboard/share",
                element: <Share />,
              },
              {
                path: "/dashboard/preview",
                element: <Preview />,
              },
            ],
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
