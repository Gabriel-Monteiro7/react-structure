export function singInRequest(email: String, password: String) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { email, password },
  };
}

export function singInSuccess(token: String, user: Object) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { token, user },
  };
}
export function singFailure() {
  return {
    type: "@auth/SIGN_FAILURE",
  };
}
export function singOut() {
  return {
    type: "@auth/SIGN_OUT",
  };
}
