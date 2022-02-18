import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { userReducer } from "./user";
import { foodrReducer } from "./food";
import { orderReducer } from "./order";
import { cartReducer } from "./cart.reducer";

// const persistConfig = {
//   key: "quoality-guest",
//   storage,
//   whitelist: ["cart"],
// };

export const rootReducer = combineReducers({
  userReducer,
  foodrReducer,
  orderReducer,
  cartReducer,
});

// export default persistReducer(persistConfig, rootReducer);
