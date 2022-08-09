import * as yup from "yup";

export interface LoginForm {
  email: string;
  password: string;
}

export const formInitialState: LoginForm = {
  email: "",
  password: "",
};

export const formSchema = yup.object().shape({
  email: yup.string().email("Email must be a valid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});
