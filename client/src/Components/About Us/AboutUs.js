import React from "react";
import aboutUsImg from "./aboutUsImg.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus-main">
      <div className="main-txt">
        <h1>We Deliver</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <button>Contact Us</button>
      </div>
      <img src={aboutUsImg} alt="aboutUs image" />
    </div>
  );
};

export default AboutUs;
