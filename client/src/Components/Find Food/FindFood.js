import React, { useEffect, useState } from "react";
import "./FindFood.css";
import FoodCard from "./FoodCard";
import { getFood } from "../../JS/actions/food";
import { useDispatch, useSelector } from "react-redux";

const FindFood = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFood());
  }, []);
  const [search, setsearch] = useState("");
  const searchFood = (search) => {
    setsearch(search);
  };

  const foods = useSelector((state) => state.foodrReducer.foods);

  return (
    <div className="find-Food">
      <input
        type="text"
        placeholder="search"
        onChange={(e) => searchFood(e.target.value)}
      />
    <div className="main-find-food">
      
      {foods ? (
        foods
          .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
          .map((el) => <FoodCard food={el} />)
      ) : (
        <h3>loading</h3>
      )}
    </div></div>
  );
};

export default FindFood;
