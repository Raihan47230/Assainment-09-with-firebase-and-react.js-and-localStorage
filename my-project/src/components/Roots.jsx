import React from "react";
import Home from "./Layout/HomePage/Home";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import { Outlet } from "react-router-dom";

const Roots = () => {
  return (
    <div >
      <div className="w-11/12 mx-auto ">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
