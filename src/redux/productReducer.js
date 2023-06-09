import { SETPRODUCTLIST } from "./constant";
const initialState = {
  productname: [],
};
export const productData = (state = initialState, action) => {
  switch (action.type) {
    case SETPRODUCTLIST:
      return {
        productname: action.payload,
      };
    default:
      return state;
  }
};
