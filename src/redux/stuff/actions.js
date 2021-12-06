import {
  SET_STUFFS,
  SET_STUFF,
  GET_STUFFS,
  GET_STUFF,
  SET_STUFF_LOADING,
  GET_STUFFS_BY_CATEGORY,
} from "./types";

export const setStuffs = (payload) => ({
  type: SET_STUFFS,
  payload,
});

export const setStuff = (payload) => ({
  type: SET_STUFF,
  payload,
});

export const getStuffs = () => ({
  type: GET_STUFFS,
});

export const getStuff = (payload) => ({
  type: GET_STUFF,
  payload,
});

export const getStuffByCategory = (payload) => ({
  type: GET_STUFFS_BY_CATEGORY,
  payload,
});

export const setStuffLoading = (payload) => ({
  type: SET_STUFF_LOADING,
  payload,
});
