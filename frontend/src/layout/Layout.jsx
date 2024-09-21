import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <div className="w-full min-h-[calc(100dvh-60px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
