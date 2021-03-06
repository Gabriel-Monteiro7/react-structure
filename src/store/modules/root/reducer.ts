import produce from "immer";

const INITIAL_STATE = {
  themeDefault: true,
  language: "en",
  languages: "",
  snackbar: {
    open: false,
    current: null,
    remainder: [],
  },
  modal: {
    open: false,
    type: null,
  },
};

export default function root(state = INITIAL_STATE, action: any) {
  return produce(state, (draft: any) => {
    switch (action.type) {
      case "@root/CHANGE_THEME": {
        draft.themeDefault = action.payload.theme;
        break;
      }
      case "@root/CHANGE_LANGUAGE": {
        draft.language = action.payload.language;
        break;
      }
      case "@root/GET_LANGUAGES_REQUEST":
        break;
      case "@root/GET_LANGUAGES_SUCCESS": {
        draft.languages = action.payload.languages;
        break;
      }
      case "@root/SHOW_SNACK_BAR": {
        draft.snackbar.remainder.push(action.payload.snackbar);
        break;
      }
      case "@root/HIDDEN_SNACK_BAR": {
        draft.snackbar.open = false;
        break;
      }
      case "@root/PROCESS_SNACKBAR_QUEUE": {
        if (state.snackbar.remainder.length > 0) {
          const current = draft.snackbar.remainder[0];
          const remainder = draft.snackbar.remainder.slice(1);
          draft.snackbar = { open: true, remainder, current };
        } else {
          draft.snackbar = INITIAL_STATE.snackbar;
        }
        break;
      }
      case "@root/SNACKBAR_RESTART": {
        draft.snackbar = INITIAL_STATE.snackbar;
        break;
      }
      case "@root/SHOW_MODAL": {
        draft.modal = {
          open: true,
          type: action.payload.type,
          element: action.payload.element,
        };
        break;
      }
      case "@root/HIDDEN_MODAL": {
        draft.modal = { open: false, type: null };
        break;
      }
      default:
    }
  });
}
