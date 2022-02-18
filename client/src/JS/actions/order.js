import {
  ADD_ORDER,
  DELETE_ORDER,
  GET_ONE_ORDER,
  GET_ORDER,
  GET_ORDER_FAIL,
  GET_ORDER_SUCCESS,
  UPDATE_ORDER,
} from "../const/order";
import axios from "axios";

//get all orders
export const getOrder = () => async (dispatch) => {
  dispatch({ type: GET_ORDER });
  try {
    const result = await axios.get("/order");
    dispatch({ type: GET_ORDER_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: GET_ORDER_FAIL, payload: error.response.data });
    console.log(error);
  }
};

//get order by id
export const getOrderById = (id) => async (dispatch) => {
  await axios
    .get(`/order/${id}`)
    .then((res) => dispatch({ type: GET_ONE_ORDER, payload: res.data.response }))
    .catch((err) => console.log(err));
};

//add order
export const addOrder = (order) => async (dispatch) => {
  try {
    const result = await axios.post("/order", order);
    dispatch({ type: ADD_ORDER, payload: result.data });
  } catch (error) {
    dispatch({ payload: error.response.data });
    console.log(error);
  }
};

//delete order
export const deleteOrder = (id) => async (dispatch) => {
  dispatch({ type: DELETE_ORDER });
  try {
    const result = await axios.delete(`/order/${id}`);
  } catch (error) {
    console.log(error);
  }
};

//update order
export const updatedOrder =
  ({ id, order }) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_ORDER });
    try {
      const result = await axios.put(`/order/${id}`, order);
    } catch (error) {
      dispatch({ payload: error.response.data });
      console.log(error);
    }
  };
