import { takeLatest, put, all, call } from "redux-saga/effects";

import history from "~/service/history";
import service from "~/service/service";
import { showSnackbar } from "~/store/modules/root/actions";

import { singInSuccess, singFailure } from "./actions";

export function* signIn({ payload }: any) {
  yield put(
    showSnackbar({
      type: "info",
      message: "snackbar.loading.message",
    })
  );
  try {
    const { email, password } = payload;
    let response = yield call(service.post, "/jwt/create", {
      email,
      password,
    });
    const { access } = response.data;
    response = yield call(service.get, "/users/me/", {
      headers: { Authorization: `Bearer ${access}` },
    });
    yield put(singInSuccess(access, response.data));
    history.push("/home");
  } catch (error) {
    const message = "snackbar.erro.login.noCredentials";
    yield put(showSnackbar({ type: "error", message }));
    yield put(showSnackbar({ type: "success", message }));
    yield put(singFailure());
  }
}
export function* singOut() {
  try {
    yield;
    history.push("/");
  } catch (erro) {
    yield put(showSnackbar({ type: "error", message: "" }));
  }
}
export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", singOut),
]);
