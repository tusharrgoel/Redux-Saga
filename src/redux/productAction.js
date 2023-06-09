import { PRODUCTLIST } from "./constant";
export const productList = (data) => {
  return {
    type: PRODUCTLIST,
    payload: data,
  };
};
