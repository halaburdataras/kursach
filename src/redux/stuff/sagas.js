import { setStuffLoading, setStuffs } from "./actions";
import { takeEvery, call, put } from "redux-saga/effects";
import { getAllStuff, getStuffByCategory } from "./operation";
import { GET_STUFFS, GET_STUFFS_BY_CATEGORY } from "./types";

export function* handleStuffsLoad() {
  try {
    yield put(setStuffLoading(true));
    const stuffs = yield call(getAllStuff);
    yield put(setStuffs(stuffs));
    yield put(setStuffLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export function* handleStuffLoadByCategory(payload) {
  try {
    yield put(setStuffLoading(true));
    const stuffs = yield call(getStuffByCategory, payload.payload);
    yield put(setStuffs(stuffs));
    yield put(setStuffLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export default function* stuffSaga() {
  yield takeEvery(GET_STUFFS, handleStuffsLoad);
  yield takeEvery(GET_STUFFS_BY_CATEGORY, handleStuffLoadByCategory);
}
