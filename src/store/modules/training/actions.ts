export function insertRequest(data: any, token: string) {
  return {
    type: "@training/INSERT_REQUEST",
    payload: { data, token },
  };
}

export function insertSuccess(data: any) {
  return {
    type: "@training/INSERT_SUCCESS",
    payload: { data },
  };
}

export function selectedSuccess(data: any) {
  return {
    type: "@training/SELECTED_SUCCESS",
    payload: { data },
  };
}
export function updateRequest(data: any, token: string, id: string) {
  return {
    type: "@training/UPDATE_REQUEST",
    payload: { data, token, id },
  };
}

export function updateSuccess(data: any, id: string) {
  return {
    type: "@training/UPDATE_SUCCESS",
    payload: { data, id },
  };
}

export function getRequest() {
  return {
    type: "@training/GET_REQUEST",
    payload: {},
  };
}

export function getSuccess(data: any) {
  return {
    type: "@training/GET_SUCCESS",
    payload: { data },
  };
}

export function deleteRequest(token: string, id: string) {
  return {
    type: "@training/DELETE_REQUEST",
    payload: { token, id },
  };
}

export function deleteSuccess(id: string) {
  return {
    type: "@training/DELETE_SUCCESS",
    payload: { id },
  };
}
