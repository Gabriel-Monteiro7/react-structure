import { takeLatest, all, call, put, select, delay } from "redux-saga/effects";
import {
  getLanguagesSuccess,
  processSnackbarQueue,
  hidenSnackbar,
} from "./actions";
import service from "~/service/service";
export function* getLanguages({ payload }: any) {
  try {
    const response = yield call(service.get, `/collections/get/texts`);
    yield put(getLanguagesSuccess(response.data.entries[1].language));
  } catch (erro) {}
}

function* onShowSnackbar() {
  const open = yield select((state) => state.root.snackbar.open);
  yield delay(200);
  if (open) {
    yield put(hidenSnackbar());
  } else {
    yield put(processSnackbarQueue());
  }
}

export default all([
  takeLatest("@root/GET_LANGUAGES_REQUEST", getLanguages),
  takeLatest("@root/SHOW_SNACK_BAR", onShowSnackbar),
]);
