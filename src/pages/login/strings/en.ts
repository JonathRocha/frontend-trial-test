import { StringsLocalization } from "@/pages/login/definition";

export const strings: StringsLocalization = {
  title: "Sign in",
  inputs: {
    email: {
      label: "E-mail",
      required: "E-mail is required",
      invalid: "E-mail is invalid",
    },
    password: {
      label: "Password",
      required: "Password is required",
    },
  },
  buttons: {
    submit: "Send",
    loading: "Loading...",
  },
  errors: {
    unexpected: "Something went wrong, please try again.",
  },
};
