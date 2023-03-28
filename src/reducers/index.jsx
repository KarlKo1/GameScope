import { combineReducers } from "@reduxjs/toolkit";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const rootReducers = combineReducers({
  games: gamesReducer,
  details: detailReducer,
});

export default rootReducers;
