import React from "react";
// import { NavLink } from "react-router-dom";
import Common from "./Common";
import web1 from "../src/img/img2.svg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your buisness with"
        imgsrc={web1}
        name2="Get started with us"
        btname="Get Started"
        visit="/service"
      />
    </>
  );
};
export default Home;
