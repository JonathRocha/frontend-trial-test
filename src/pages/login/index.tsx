import { useIsAuthenticated, useLoginMutation } from "@/hooks/login";
import { TOKEN_KEY } from "@/hooks/login/definition";
import { formInitialState, formSchema, LoginForm } from "@/pages/login/definition";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useCallback } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import "@/pages/login/styles.scss";

export const Login = () => {
  const isAuthenticated = useIsAuthenticated();
  const [login, { loading }] = useLoginMutation();

  const handleSubmit = useCallback(
    async (values: LoginForm, formikHelpers: FormikHelpers<LoginForm>) => {
      const { resetForm } = formikHelpers;
      try {
        const { data } = await login({
          variables: { input: { identifier: values.email, password: values.password, provider: "local" } },
        });

        if (data?.login?.jwt) {
          localStorage.setItem(TOKEN_KEY, data.login.jwt);
          resetForm();
        } else {
          throw new Error("Login failed");
        }
      } catch (error) {
        toast.error(`Something went wrong, please try again.`);
      }
    },
    [login],
  );

  const renderMessage = (message: string) => <p className="login-form_field--error">{message}</p>;

  if (isAuthenticated) {
    return <Navigate to="/account" replace />;
  }

  return (
    <Formik initialValues={formInitialState} validationSchema={formSchema} onSubmit={handleSubmit}>
      <Form className="login-form" noValidate>
        <legend>Sign in</legend>

        <div className="login-form_field">
          <label htmlFor="email">E-mail</label>
          <Field className="login-form_field--input" type="email" id="email" name="email" />
          <ErrorMessage name="email" render={renderMessage} />
        </div>

        <div className="login-form_field">
          <label htmlFor="password">Password</label>
          <Field className="login-form_field--input" type="password" id="password" name="password" />
          <ErrorMessage name="password" render={renderMessage} />
        </div>

        <button className="login-form_button" type="submit" id="login-submit" disabled={loading}>
          {loading ? "Loading..." : "Send"}
        </button>
      </Form>
    </Formik>
  );
};
