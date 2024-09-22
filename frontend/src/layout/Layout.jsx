import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { AuthProvider } from "../context/AuthenthicationContext";
import { UserProvider } from "../context/UserContext";

function Layout() {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <Header />
          <div className="w-full min-h-[calc(100dvh-60px)]" id="layout">
            <Outlet />
          </div>
          <Footer />
        </UserProvider>
      </AuthProvider>
    </>
  );
}

export default Layout;
