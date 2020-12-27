import produce from "immer";
const INITIAL_STATE = {
  trainings: [],
};

export default function training(state = INITIAL_STATE, action: any) {
  return produce(state, (draft: any) => {
    let { payload }: any = action;
    switch (action.type) {
      case "@training/GET_REQUEST": {
        break;
      }
      case "@training/GET_SUCCESS": {
        draft.trainings = payload.data;
        break;
      }
      case "@training/INSERT_REQUEST": {
        break;
      }
      case "@training/INSERT_SUCCESS": {
        draft.trainings.push(payload.data);
        break;
      }
      case "@training/SELECTED_SUCCESS": {
        draft.trainings = payload.data;
        break;
      }
      case "@training/UPDATE_REQUEST":
        break;
      case "@training/UPDATE_SUCCESS": {
        draft.trainings = draft.trainings.map((value: any) => {
          return value?.id === payload.id ? payload.data : value;
        });
        break;
      }
      case "@training/DELETE_REQUEST":
        break;
      case "@training/DELETE_SUCCESS": {
        draft.trainings = draft.trainings.filter((value: any) => {
          return value.id !== payload.id;
        });
        break;
      }
      case "@auth/SIGN_OUT": {
        draft.trainings = [];
        break;
      }
      default:
    }
  });
}
