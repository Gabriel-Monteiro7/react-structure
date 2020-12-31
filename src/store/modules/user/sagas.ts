import { takeLatest, all, call,put } from "redux-saga/effects";

import service from "~/service/service";
import { showSnackbar } from "~/store/modules/root/actions";

export function* register({ payload }: any) {
  try {
    const { password, email, username } = payload;
    yield call(service.post, "/users/", {
      username,
      email,
      password,
      re_password: password,
      first_name: "",
      last_name: "",
    });
  } catch (erro) {    
    yield put(showSnackbar({type:"error",message:"snackbar.erro.login.registerUSer"}));
  }
}
export default all([takeLatest("@user/REGISTER_REQUEST", register)]);
