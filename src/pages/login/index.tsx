import { useLoginMutation } from "@/hooks/useLogin";
import { formInitialState, reducer, fieldsActionMapper } from "@/pages/login/definition";
import React, { useCallback, useReducer } from "react";

import "@/pages/login/styles.scss";

export const Login = () => {
  const [state, dispatch] = useReducer(reducer, formInitialState);
  const [login, { loading }] = useLoginMutation();

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const { errors, data } = await login({
          variables: { input: { identifier: state.email, password: state.password, provider: "local" } },
        });

        console.log({ errors, data });
      } catch (error) {
        console.log({ error });
      }
    },
    [login, state],
  );

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({ type: fieldsActionMapper[name], payload: value });
  }, []);

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <legend>Sign in</legend>

      <div className="login-form_field">
        <label htmlFor="email">E-mail</label>
        <input
          className="login-form_field--input"
          type="email"
          id="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </div>

      <div className="login-form_field">
        <label htmlFor="password">Password</label>
        <input
          className="login-form_field--input"
          type="password"
          id="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
      </div>

      <button className="login-form_button" type="submit" id="login-submit" disabled={loading}>
        {loading ? "Loading..." : "Send"}
      </button>
    </form>
  );
};
