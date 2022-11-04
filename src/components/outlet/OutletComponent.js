import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const OutletComponent = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
     
    </div>
  );
};

export default OutletComponent;
