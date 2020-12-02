import { takeLatest, all, call, put } from "redux-saga/effects";
import { getLanguagesSuccess } from "./actions";
import service from "~/service/service";
export function* getLanguages({ payload }: any) {
  try {
    const response = yield call(service.get, `/collections/get/texts`);
    yield put(getLanguagesSuccess(response.data.entries[1].language));
  } catch (erro) {
    console.log(erro);
  }
}
export default all([takeLatest("@root/GET_LANGUAGES_REQUEST", getLanguages)]);
