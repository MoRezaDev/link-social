import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute() {
  const { isAuthenthicated } = useAuth();
  const isLoggedIn = true;
  return isAuthenthicated ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedRoute;
