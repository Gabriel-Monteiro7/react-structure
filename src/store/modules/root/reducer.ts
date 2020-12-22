import produce from "immer";

const INITIAL_STATE = {
  themeDefault: true,
  language: "en",
  languages: "",
};

export default function root(state = INITIAL_STATE, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@root/CHANGE_THEME":
        draft.themeDefault = action.payload.theme;
        break;
      case "@root/CHANGE_LANGUAGE":
        draft.language = action.payload.language;
        break;
      case "@root/GET_LANGUAGES_REQUEST":
        break;
      case "@root/GET_LANGUAGES_SUCCESS":
        draft.languages = action.payload.languages;
        break;
      default:
    }
  });
}
