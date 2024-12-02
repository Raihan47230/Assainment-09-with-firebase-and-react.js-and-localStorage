import React from "react";
import Banner from "./Banner";
import Learn from "../../Learn";
import Success from "../../Success";
import Free from "../../Free";
import Speaker from "../../Speaker";

const Home = () => {
  return (
    <div>
      <div className="pt-5 px-2 bg-slate-50">
        <Banner></Banner>
        <Learn></Learn>
        <Success></Success>
        <Free></Free>
        <Speaker></Speaker>
      </div>
    
    </div>
  );
};

export default Home;
