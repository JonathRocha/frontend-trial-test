import { Login } from "@/pages/login";
import { strings } from "@/pages/login/strings";
import * as loginHooks from "@/hooks/login";
import { render, screen } from "@testing-library/react";
import React from "react";

const useContextStub = jest.spyOn(React, "useContext");
const useIsAuthenticatedStub = jest.spyOn(loginHooks, "useIsAuthenticated");
const useLoginMutationStub = jest.spyOn(loginHooks, "useLoginMutation");

jest.mock("react-router-dom");

describe("Page Login", () => {
  beforeEach(() => {
    useContextStub.mockImplementation(() => ({ language: "EN" }));
    useIsAuthenticatedStub.mockImplementation(() => false);
    useLoginMutationStub.mockImplementation(() => [
      jest.fn(),
      { loading: false, data: null, error: null, reset: jest.fn(), called: false, client: null },
    ]);
  });

  it("Should render without crashing", () => {
    render(<Login />);
    const texts = strings["EN"];
    const formTitle = screen.getByText(texts.title);
    expect(formTitle).toBeInTheDocument();
  });

  it("Should contain texts with localization", () => {
    useContextStub.mockReturnValue({ language: "PT" });

    render(<Login />);

    const texts = strings["PT"];
    const formTitle = screen.getByText(texts.title);
    const formEmail = screen.getByLabelText(texts.inputs.email.label);
    const formPassword = screen.getByLabelText(texts.inputs.password.label);
    const formSubmit = screen.getByText(texts.buttons.submit);

    expect(formTitle).toBeInTheDocument();
    expect(formEmail).toBeInTheDocument();
    expect(formPassword).toBeInTheDocument();
    expect(formSubmit).toBeInTheDocument();
  });

  it("Should redirect to account page and not render login if authenticated", () => {
    useIsAuthenticatedStub.mockReturnValue(true);

    render(<Login />);

    const inputEmail = screen.queryByTestId("email");
    expect(inputEmail).not.toBeInTheDocument();
  });
});
