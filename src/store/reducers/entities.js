import { combineReducers } from "@reduxjs/toolkit";

import taskReducer from "./taskReducer";
import userReducer from "./userReducer";

export default combineReducers({
  tasks: taskReducer,
  users: userReducer,
});
