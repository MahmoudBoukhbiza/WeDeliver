import {
  ADD_ORDER,
  DELETE_ORDER,
  GET_ONE_ORDER,
  GET_ORDER,
  GET_ORDER_FAIL,
  GET_ORDER_SUCCESS,
  UPDATE_ORDER,
} from "../const/order";

const initialState = {
  orders: [],
  errors: null,
  order: {},
  isEmpty:true,
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ORDER:
      return { ...state, orders: state.orders };
    case GET_ONE_ORDER:
      return { ...state, order: state.orders };
    case GET_ORDER_SUCCESS:
      return { ...state, orders: payload };
    case GET_ORDER_FAIL:
      return { ...state, errors: payload };
    case DELETE_ORDER:
      return { ...state, errors: payload };
    case UPDATE_ORDER:
      return { ...state, orders: payload };
    default:
      return state;
  }
};
