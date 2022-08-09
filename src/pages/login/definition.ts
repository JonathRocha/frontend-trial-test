export interface LoginForm {
  email: string;
  password: string;
}

export enum LoginFormActionType {
  SET_EMAIL = "SET_EMAIL",
  SET_PASSWORD = "SET_PASSWORD",
  RESET = "RESET",
}

export interface LoginFormAction {
  type: LoginFormActionType;
  payload: string;
}

export const formInitialState: LoginForm = {
  email: "",
  password: "",
};

export const fieldsActionMapper = {
  email: LoginFormActionType.SET_EMAIL,
  password: LoginFormActionType.SET_PASSWORD,
};

export function reducer(state: LoginForm, action: LoginFormAction) {
  switch (action.type) {
    case LoginFormActionType.SET_EMAIL:
      return { ...state, email: action.payload };
    case LoginFormActionType.SET_PASSWORD:
      return { ...state, password: action.payload };
    case LoginFormActionType.RESET:
      return formInitialState;
    default:
      return state;
  }
}
