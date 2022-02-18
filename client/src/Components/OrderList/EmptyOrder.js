import React from "react";
import "./emptyorder.css";

const EmptyOrder = () => {
  return (
    <div className="emptyCart">
      <img src="https://merchlist.co/assets/emptycart.png" alt="" />
      <button>
        <i className="fas fa-long-arrow-alt-left"></i>
        <a href="/findfood">Order Now</a>
      </button>
    </div>
  );
};

export default EmptyOrder;
