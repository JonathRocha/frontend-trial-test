export interface StringsLocalization {
  title: string;
  inputs: {
    email: {
      label: string;
      required: string;
      invalid: string;
    };
    password: {
      label: string;
      required: string;
    };
  };
  buttons: {
    submit: string;
    loading: string;
  };
  errors: {
    unexpected: string;
  };
}

export interface LoginForm {
  email: string;
  password: string;
}

export const formInitialState: LoginForm = {
  email: "",
  password: "",
};
