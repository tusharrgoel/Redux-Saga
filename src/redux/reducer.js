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
      return {
        cartproducts: state.cartproducts.filter(
          (item) => item !== action.payload
        ),
        noofItems: state.noofItems - 1,
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
