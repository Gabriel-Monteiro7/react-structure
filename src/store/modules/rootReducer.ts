import { combineReducers } from "redux";
import auth from "./auth/reducer";
import user from "./user/reducer";
import root from "./root/reducer";
const reducers = combineReducers({
  auth,
  user,
  root,
});

export default reducers;
