import {
  GET_FOOD,
  ADD_FOOD,
  UPDATE_FOOD,
  DELETE_FOOD,
  GET_FOOD_FAIL,
  GET_FOOD_SUCCESS,
  GET_ONE_FOOD,
} from "../const/food";
import axios from "axios";

//get all foods
export const getFood = () => async (dispatch) => {
  dispatch({ type: GET_FOOD });
  try {
    const result = await axios.get("/food");
    dispatch({ type: GET_FOOD_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: GET_FOOD_FAIL, payload: error.response.data });
    console.log(error);
  }
};

//get food by id
export const getFoodById = (id) => async (dispatch) => {
  axios
    .get(`/food/${id}`)
    .then((res) => dispatch({ type: GET_ONE_FOOD, payload: res.data.response }))
    .catch((err) => console.log(err));
};

//add food
export const addFood = (food, navigate) => async (dispatch) => {
  try {
    const result = await axios.post("/food", food);
    dispatch({ type: ADD_FOOD, payload: result.data });
    navigate("/findfood");
  } catch (error) {
    dispatch({ payload: error.response.data });
    console.log(error);
  }
};

//delete food
export const deleteFood = (id) => async (dispatch) => {
  dispatch({ type: DELETE_FOOD });
  try {
    const result = await axios.delete(`/food/${id}`);
  } catch (error) {
    console.log(error);
  }
};

//update food
export const updatedFood =
  ({ id, food }) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_FOOD });
    try {
      const result = await axios.put(`/food/${id}`, food);
    } catch (error) {
      dispatch({ payload: error.response.data });
      console.log(error);
    }
  };
