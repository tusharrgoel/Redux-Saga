import { PRODUCTLIST, PRODUCTSEARCH, SETPRODUCTLIST } from "./constant";
import { takeEvery, put } from "redux-saga/effects";

function* getProducts() {
  let data = yield fetch("http://localhost:3500/product");
  data = yield data.json();
  yield put({ type: SETPRODUCTLIST, payload: data });
}
function* searchProduct(data) {
  let result = yield fetch(`http://localhost:3500/product?q=${data.payload}`);
  result = yield result.json();
  console.warn("SAGA search products",data)
  yield put({ type: SETPRODUCTLIST, payload: result });
}

function* productSaga() {
  yield takeEvery(PRODUCTLIST, getProducts);
  yield takeEvery(PRODUCTSEARCH,searchProduct)
}
export default productSaga;
