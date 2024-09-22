import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute() {
  const { isAuthenthicated, isLoading } = useAuth();
  const isLoggedIn = true;
  if (isLoading) {
    return <div>Loading...</div>; // Show a loading spinner or message
  }
  return isAuthenthicated ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedRoute;
