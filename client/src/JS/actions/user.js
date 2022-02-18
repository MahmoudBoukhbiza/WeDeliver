import {
  LOAD_USER,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  FAIL_USER,
  CURRENT_USER,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "../const/user";
import axios from "axios";

export const registerUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/register", user);
    dispatch({ type: REGISTER_USER, payload: result.data });
    navigate("/");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
    console.log(error);
  }
};

export const loginUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data });
    navigate("/");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const currentUser = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("/current", options);
    dispatch({ type: CURRENT_USER, payload: result.data.user });
  } catch (error) {}
};

export const logOut = () => {
  return {
    type: LOGOUT_USER,
  };
};


//get all user
export const getUser = () => async (dispatch) => {
  dispatch({ type: GET_USER });
  try {
    const result = await axios.get("/user");
    dispatch({ type: GET_USER_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error.response.data });
    console.log(error);
  }
};