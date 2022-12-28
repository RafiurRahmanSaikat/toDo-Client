import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Divider from "../components/Utilities/Divider";

const Layout = () => {
  return (
    <section className=" h-[100vh]">
      <Navbar></Navbar>
      <Divider></Divider>
      <Outlet></Outlet>
      <Divider></Divider>
      <Footer></Footer>
    </section>
  );
};

export default Layout;
