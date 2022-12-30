import React, {  } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Divider from "../components/Utilities/Divider";

const Layout = () => {
  return (
    <section className="bg-gray-50 dark:text-white text-base mx-auto dark:bg-gray-800 h-[100vh]">
      <Navbar></Navbar>
      <Divider></Divider>
      <Outlet></Outlet>
      <Divider></Divider>
      <Footer></Footer>
    </section>
  );
};

export default Layout;
