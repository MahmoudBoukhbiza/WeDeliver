import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFood, getFood } from "../../JS/actions/food";
import { userReducer } from "../../JS/reducers/user";

import "./Add.css";

function Add() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [postedBy, setpostedBy] = useState("");
  const user = useSelector((state) => state.userReducer.user);
  const [show, setshow] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    setpostedBy(user.name);
  }, [user]);

  return (
    <div className="addmodal">
      <button onClick={() => setshow(!show)}> Add Food</button>

      {show ? (
        <div>
          <div class="modal">
            <div class="modal__details">
              <h1 class="modal__title">Add Food</h1>
            </div>
            <input
              type="text"
              placeholder="Add your food image"
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type="text"
              placeholder="Food Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Food Category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="number"
              placeholder="Food Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <button
              onClick={() => {
                dispatch(addFood({ image, name, category, price, postedBy }));
                dispatch(getFood());
                setshow(!show);
              }}
            >
              Add
            </button>
            <p class="link-2" onClick={() => setshow(!show)}></p>{" "}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Add;
