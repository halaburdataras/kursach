import { all } from "redux-saga/effects";
import cartSaga from "./cart/saga";
import stuffSaga from "./stuff/sagas";

export function* rootSaga() {
  yield all([stuffSaga(), cartSaga()]);
}
