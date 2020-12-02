export function changeTheme(theme: boolean) {
  return {
    type: "@root/CHANGE_THEME",
    payload: { theme },
  };
}
export function changeLanguage(language: String) {
  return {
    type: "@root/CHANGE_LANGUAGE",
    payload: { language },
  };
}
export function getLanguagesRequest() {
  return {
    type: "@root/GET_LANGUAGES_REQUEST",
  };
}
export function getLanguagesSuccess(languages: String) {
  return {
    type: "@root/GET_LANGUAGES_SUCCESS",
    payload: { languages },
  };
}
