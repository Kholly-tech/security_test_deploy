import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="h-screen">
      <NavBar />
      <main className="w-full min-h-[calc(100vh-80px)] mb-5 bg-[#ADA4A41A]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
