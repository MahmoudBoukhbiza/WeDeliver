import React from "react";
import mainImg from "./main-img.png"
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="main-txt">
        <h1>We Deliver</h1>
        <p>just confirm your order and enjoy
          our delicious fastest delivery</p>
        <button>See Menu</button>
      </div>
      <img src={mainImg}/>
    </div>
  );
};

export default Home;
