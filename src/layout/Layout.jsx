import React, { useContext }  from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Divider from "../components/Utilities/Divider";
import { AuthContext } from "../context/AuthContext";

const Layout = () => {
  const {user}=useContext(AuthContext)
  console.log(user);
  return (
    <section className="bg-gray-50 dark:text-white text-base mx-auto dark:bg-gray-800  ">
      <Navbar></Navbar>
      <Divider></Divider>
      <Outlet></Outlet>
      <Divider></Divider>
      <Footer></Footer>
    </section>
  );
};

export default Layout;
