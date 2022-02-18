import React from "react";
import FacebookLogo from "./facebook.png";
import InstagramLogo from "./instagram.png";
import TikTokLogo from "./tic-tac.png";
import TwitterLogo from "./twitter.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-g">
      <div className="contact">
        <p>Adresse</p>
        <p>+216 00 00 00 00</p>
        <p>contact@wedeliver.com</p>
      </div>
      <div className="social-media">
        <img src={FacebookLogo} alt="" />
        <img src={InstagramLogo} alt="" />
        <img src={TikTokLogo} alt="" />
        <img src={TwitterLogo} alt="" />
      </div>
      <p>We Deliver All Rights reserved</p>
    </div>
  );
};

export default Footer;
