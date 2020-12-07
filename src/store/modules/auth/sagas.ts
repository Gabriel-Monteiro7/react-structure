import { takeLatest, put, all, call } from "redux-saga/effects";

import history from "~/service/history";
import service from "~/service/service";
// import { toast } from "react-toastify";
import { singInSuccess, singFailure } from "./actions";
export function* signIn({ payload }: any) {
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
  } catch (erro) {
    // toast.error("Erro na autenticação");
    
    yield put(singFailure());
  }
}
export function* singOut() {
  try {
    yield;
    history.push("/");
  } catch (erro) {
    // toast.error("Erro ao deslogar");
  }
}
export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", singOut),
]);
