import { ADDTOCART, EMPTYCART, REMOVETOCART } from "./constant";
export const addToCart = (data) => {
  return {
    type: ADDTOCART,
    payload: data,
  };
};
export const removetoCart = (data) => {
  return {
    type: REMOVETOCART,
    payload: data,
  };
};
export const emptyCart = () => {
  return {
    type: EMPTYCART,
  };
};
