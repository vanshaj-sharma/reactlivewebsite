import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "./img/img3.svg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to about page"
        imgsrc={web}
        name2="Contact us for more imformation"
        btname="Contact Now"
        visit="/contact"
      />
    </>
  );
};

export default About;
