import { takeLatest, put, all, call, delay } from "redux-saga/effects";

import history from "~/service/history";
import service from "~/service/service";
import {
  showSnackbar,
  processSnackbarQueue,
} from "~/store/modules/root/actions";

import { singInSuccess, singFailure } from "./actions";

export function* signIn({ payload }: any) {
  try {
    yield put(
      showSnackbar({
        type: "info",
        message: "snackbar.loading.message",
        loading: true,
      })
    );
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
    yield put(processSnackbarQueue());
    history.push("/home");
  } catch (error) {
    const message = "snackbar.erro.login.noCredentials";
    yield put(showSnackbar({ type: "error", message }));
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
