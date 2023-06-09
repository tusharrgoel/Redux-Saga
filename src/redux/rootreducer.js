import { combineReducers } from "redux";
import { cartItems } from "./reducer";
import { productData } from "./productReducer";

const rootreducer = combineReducers({
  cart: cartItems,
  product: productData,
});
export default rootreducer;
