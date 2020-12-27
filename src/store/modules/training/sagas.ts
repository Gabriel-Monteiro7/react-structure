import { takeLatest, put, all, call, select } from "redux-saga/effects";

import history from "~/service/history";
import service from "~/service/service";
import {
  insertSuccess,
  updateSuccess,
  getSuccess,
  deleteSuccess,
} from "./actions";

export function* insert({ payload }: any) {
  let { token, data } = payload;
  try {
    let response = yield call(service.post, `training/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(insertSuccess(response));
    history.goBack();
  } catch (erro) {
    // toast.error("Erro na listagem");
  }
}

export function* update({ payload }: any) {
  let { token, data, id } = payload;
  try {
    let response = yield call(service.put, `training/${id}/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(updateSuccess(response.data, id));
    history.goBack();
  } catch (erro) {
    // toast.error("Erro na listagem");
  }
}
export function* deletetraining({ payload }: any) {
  let { token, id } = payload;
  try {
    yield call(service.delete, `training/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(deleteSuccess(id));
  } catch (erro) {
    // toast.error("Erro na listagem");
  }
}

function* get() {
  let { token }: any = yield select((state: any) => state.auth);
  console.log(token);
  
  try {
    let response = yield call(service.get, "training/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    
    yield put(getSuccess(response.data));
  } catch (erro) {
    
    // toast.error("Erro na listagem");
  }
}

export default all([
  takeLatest("@training/INSERT_REQUEST", insert),
  takeLatest("@training/UPDATE_REQUEST", update),
  takeLatest("@training/GET_REQUEST", get),
  takeLatest("@training/DELETE_REQUEST", deletetraining),
]);
