import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./features/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
