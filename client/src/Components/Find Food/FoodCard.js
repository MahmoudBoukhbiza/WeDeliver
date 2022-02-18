import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, getOrder, getOrderById } from "../../JS/actions/order";
import "./foodCard.css";

const FoodCard = ({ food }) => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foodrReducer.food);

  return (
    <div className="food-card">
      <img src={food.image} alt="foodImg" />
      <h3>{food.name} </h3>
      <h3>{food.category}</h3>
      <p>Posted by: {food.postedBy}</p>
      <div className="price-add">
        <h3>{food.price} DT</h3>
        <button onClick={()=>dispatch(addOrder())}>Add</button>
      </div>
    </div>
  );
};

export default FoodCard;
