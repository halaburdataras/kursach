import { createSelector } from "reselect";
import { selectStuff } from "../stuff/reducer";

export const stuffSelector = createSelector(selectStuff, (stuff) => stuff);
