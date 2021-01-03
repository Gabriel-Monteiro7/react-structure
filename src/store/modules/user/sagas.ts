import { takeLatest, all, call, put } from "redux-saga/effects";

import service from "~/service/service";
import { showSnackbar } from "~/store/modules/root/actions";

export function* register({ payload }: any) {
  try {
    yield put(
      showSnackbar({
        type: "info",
        message: "snackbar.loading.message",
        loading: true,
      })
    );
    const { password, email, username } = payload;
    yield call(service.post, "/users/", {
      username,
      email,
      password,
      re_password: password,
      first_name: "",
      last_name: "",
    });
    yield put(
      showSnackbar({
        type: "success",
        message: "snackbar.success.login.registerUser",
      })
    );
  } catch (erro) {
    yield put(
      showSnackbar({
        type: "error",
        message: "snackbar.erro.login.registerUser",
      })
    );
  }
}
export default all([takeLatest("@user/REGISTER_REQUEST", register)]);
