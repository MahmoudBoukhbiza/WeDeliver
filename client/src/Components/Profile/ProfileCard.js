import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFood, getFood, updateFood } from "../../JS/actions/food";
import EditFood from "./EditFood";
import "./profilecard.css";

const ProfileCard = ({ food }) => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foodrReducer.food);
  return (
    <div className="food-card">
      <h3>{food.postedBy}</h3>
      <img src={food.image} alt="foodImg" />
      <h3>{food.name} </h3>
      <h3>{food.category}</h3>
      <h3>{food.price} DT</h3>
      <div className="edit-delete-btn">
        <EditFood id={food._id} />
        <button
          className="dlt-btn"
          onClick={() => {
            dispatch(deleteFood(food._id));
            dispatch(getFood());
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
