import { takeLatest, put, all, call, select, delay } from "redux-saga/effects";

import history from "~/service/history";
import service from "~/service/service";
import {
  insertSuccess,
  updateSuccess,
  getSuccess,
  deleteSuccess,
} from "./actions";

import { showSnackbar } from "~/store/modules/root/actions";

export function* insert({ payload }: any) {
  const { data } = payload;
  const { token }: any = yield select((state: any) => state.auth);
  try {
    yield put(showSnackbar("info"));
    let response = yield call(service.post, `training/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(insertSuccess(response));
    history.goBack();
  } catch (erro) {
    yield put(showSnackbar("error"));
  }
}

export function* update({ payload }: any) {
  const { data, id } = payload;
  const { token }: any = yield select((state: any) => state.auth);

  try {
    yield put(showSnackbar("info"));
    let response = yield call(service.put, `training/${id}/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(updateSuccess(response.data, id));
    yield put(showSnackbar("success"));
    history.goBack();
  } catch (erro) {
    yield put(showSnackbar("error"));
  }
}
export function* deletetraining({ payload }: any) {
  let { id } = payload;
  const { token }: any = yield select((state: any) => state.auth);
  try {
    yield put(showSnackbar("info"));
    yield call(service.delete, `training/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(deleteSuccess(id));
    yield put(showSnackbar("success"));
  } catch (erro) {
    yield put(showSnackbar("error"));
  }
}

function* get() {
  const { token }: any = yield select((state: any) => state.auth);
  try {
    let response = yield call(service.get, "training/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(getSuccess(response.data));
  } catch (erro) {
    yield put(showSnackbar("error"));
  }
}

export default all([
  takeLatest("@training/INSERT_REQUEST", insert),
  takeLatest("@training/UPDATE_REQUEST", update),
  takeLatest("@training/GET_REQUEST", get),
  takeLatest("@training/DELETE_REQUEST", deletetraining),
]);
