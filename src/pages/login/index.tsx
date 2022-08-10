import { LanguageContext } from "@/contexts/language";
import { useIsAuthenticated, useLoginMutation } from "@/hooks/login";
import { TOKEN_KEY } from "@/hooks/login/definition";
import { formInitialState, LoginForm } from "@/pages/login/definition";
import { strings } from "@/pages/login/strings";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useCallback, useContext, useMemo } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

import "@/pages/login/styles.scss";

export const Login = () => {
  const isAuthenticated = useIsAuthenticated();
  const [login, { loading }] = useLoginMutation();
  const { language } = useContext(LanguageContext);
  const localizedTexts = strings[language];

  // TODO: Investigate why Formik does not update the messages when the language changes after the messages are rendered.
  const formSchema = useMemo(
    () =>
      yup.object().shape({
        email: yup.string().email(localizedTexts.inputs.email.invalid).required(localizedTexts.inputs.email.required),
        password: yup.string().required(localizedTexts.inputs.password.required),
      }),
    [localizedTexts],
  );

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
        toast.error(localizedTexts.errors.unexpected);
      }
    },
    [login, localizedTexts],
  );

  const renderMessage = (message: string) => <p className="login-form_field--error">{message}</p>;

  if (isAuthenticated) {
    return <Navigate to="/account" replace />;
  }

  return (
    <Formik initialValues={formInitialState} validationSchema={formSchema} onSubmit={handleSubmit}>
      <Form className="login-form" noValidate>
        <legend>{localizedTexts.title}</legend>

        <div className="login-form_field">
          <label htmlFor="email">{localizedTexts.inputs.email.label}</label>
          <Field className="login-form_field--input" type="email" id="email" name="email" />
          <ErrorMessage name="email" render={renderMessage} />
        </div>

        <div className="login-form_field">
          <label htmlFor="password">{localizedTexts.inputs.password.label}</label>
          <Field className="login-form_field--input" type="password" id="password" name="password" />
          <ErrorMessage name="password" render={renderMessage} />
        </div>

        <button className="login-form_button" type="submit" id="login-submit" disabled={loading}>
          {loading ? localizedTexts.buttons.loading : localizedTexts.buttons.submit}
        </button>
      </Form>
    </Formik>
  );
};
