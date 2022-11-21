import { combineReducers } from "@reduxjs/toolkit";

import shopsReducer from "./shops";

export default combineReducers({
  shops:shopsReducer
})