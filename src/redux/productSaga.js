import { PRODUCTLIST, SETPRODUCTLIST } from "./constant";
import { takeEvery, put } from "redux-saga/effects";

function* getProducts() {
  let data = yield fetch("http://localhost:3500/product");
  data = yield data.json();
  yield put({ type: SETPRODUCTLIST, payload: data });
}

function* productSaga() {
  yield takeEvery(PRODUCTLIST, getProducts);
}
export default productSaga;
