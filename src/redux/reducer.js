import { ADDTOCART, EMPTYCART } from "./constant";
import { REMOVETOCART } from "./constant";
const initialState = {
  cartproducts: [],
  noofItems: 0,
};
export const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      return {
        cartproducts: [...state.cartproducts, action.payload],
        noofItems: state.noofItems + 1,
      };
    case REMOVETOCART:
      const remain = state.cartproducts.filter(
        (item) => item.id !== action.payload
      );
      return {
        cartproducts: remain,
        noofItems: remain.length,
      };
    case EMPTYCART:
      return {
        cartproducts: [],
        noofItems: 0,
      };
    default:
      return state;
  }
};
