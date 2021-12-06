import { SET_STUFFS, SET_STUFF, SET_STUFF_LOADING } from "./types";

export const selectStuff = ({ Stuff }) => ({
  items: Stuff.list,
  loading: Stuff.stuffLoading,
  stuff: Stuff.stuff,
});

export const initialState = {
  list: [],
  stuff: null,
  stuffLoading: false,
};

const stuffReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STUFFS:
      return {
        ...state,
        list: action.payload,
      };
    case SET_STUFF:
      return {
        ...state,
        stuff: action.payload,
      };
    case SET_STUFF_LOADING:
      return {
        ...state,
        stuffLoading: action.payload,
      };
    default:
      return state;
  }
};

export default stuffReducer;
