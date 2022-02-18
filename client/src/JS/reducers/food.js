import {
  DELETE_FOOD,
  GET_FOOD,
  GET_FOOD_FAIL,
  GET_FOOD_SUCCESS,
  GET_ONE_FOOD,
  UPDATE_FOOD,
} from "../const/food";

const initialState = {
  foods: [],
  errors: null,
  food: {},
};

export const foodrReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FOOD:
      return { ...state, foods: state.foods };
    case GET_ONE_FOOD:
      return { ...state, food: state.foods };
    case GET_FOOD_SUCCESS:
      return { ...state, foods: payload };
    case GET_FOOD_FAIL:
      return { ...state, errors: payload };
    case DELETE_FOOD:
      return { ...state, errors: payload };
    case UPDATE_FOOD:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
