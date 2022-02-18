import React from "react";
import Logo from "./WeDeliverLogo.png";
import Bag from "./bag.png";
import NavBarProfile from "./NavBarProfile";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const isAuth = localStorage.getItem("token");
  return (
    <div className="navBar-g">
      <a href="/">
        <img className="main-logo" src={Logo} alt="logo" />
      </a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/findfood">Find Food</a>
        </li>
        <li>
          <a href="aboutus">About US</a>
        </li>
      </ul>
      <img
        className="bag-icon"
        src={Bag}
        alt=""
        onClick={() => navigate("/order")}
      />
      <NavBarProfile />
    </div>
  );
};

export default Navbar;
