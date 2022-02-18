import React from "react";
import restaurantImg from "./restaurantImg.png";
import "./restaurant.css";

const Restaurant = () => {
  return (
    <div className="restaurantItem">
      <img src={restaurantImg} alt="image de restaurant" />
      <div className="restaurantDsc">
        <h1>Name</h1>
        <button>See Menu</button>
      </div>
    </div>
  );
};

export default Restaurant;
