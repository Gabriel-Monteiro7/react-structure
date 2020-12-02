export function registerRequest(
  email: String,
  password: String,
  username: String
) {
  return {
    type: "@user/REGISTER_REQUEST",
    payload: { email, password, username },
  };
}