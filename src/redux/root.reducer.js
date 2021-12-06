import { combineReducers } from "redux";
import Stuff from "./stuff/reducer";
import Cart from "./cart/reducer";

export const rootReducer = () =>
  combineReducers({
    Stuff,
    Cart,
  });
