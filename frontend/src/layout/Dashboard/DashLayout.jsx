import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
function DashLayout() {
  return (
    <>
      <Navbar />
      <div className="p-2">
        <Outlet />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default DashLayout;
