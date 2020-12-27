import { all } from "redux-saga/effects";
import auth from "./auth/sagas";
import user from "./user/sagas";
import root from "./root/sagas";
import training from "./training/sagas";

export default function* rootSaga() {
  return yield all([auth, user,root,training]);
}
