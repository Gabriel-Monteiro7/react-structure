import { combineReducers } from "redux";
import auth from "./auth/reducer";
import user from "./user/reducer";
import root from "./root/reducer";
import training from "./training/reducer";

const reducers = combineReducers({
  auth,
  user,
  root,
  training
});

export default reducers;
