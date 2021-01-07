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
export function showSnackbar(snackbar: any) {
  return {
    type: "@root/SHOW_SNACK_BAR",
    payload: { snackbar },
  };
}
export function hiddenSnackbar() {
  return {
    type: "@root/HIDDEN_SNACK_BAR",
  };
}
export function processSnackbarQueue() {
  return {
    type: "@root/PROCESS_SNACKBAR_QUEUE",
  };
}

export function SnackbarRestart() {
  return {
    type: "@root/SNACKBAR_RESTART",
  };
}

export function showModal(type: any, element: any = undefined) {
  return {
    type: "@root/SHOW_MODAL",
    payload: { type, element },
  };
}
export function hiddenModal() {
  return {
    type: "@root/HIDDEN_MODAL",
  };
}
