import { PRODUCTLIST, PRODUCTSEARCH } from "./constant";
export const productList = () => {
  return {
    type: PRODUCTLIST,
  };
};
export const productSearch = (query) => {
  return {
    type: PRODUCTSEARCH,
    payload: query,
  };
};
