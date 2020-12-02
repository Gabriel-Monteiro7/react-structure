import { takeLatest, all, call } from "redux-saga/effects";

// import { toast } from "react-toastify";
import service from "~/service/service";
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
    // toast.error("Usuário ja cadastrado com este email ou senha muito fraca");
  }
}
export default all([takeLatest("@user/REGISTER_REQUEST", register)]);
