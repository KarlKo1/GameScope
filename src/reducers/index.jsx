import { combineReducers } from "@reduxjs/toolkit";
import gamesReducer from "./gamesReducer";

const rootReducers = combineReducers({
  games: gamesReducer,
});

export default rootReducers;
