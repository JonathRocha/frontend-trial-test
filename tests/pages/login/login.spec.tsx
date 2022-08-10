import { Login } from "@/pages/login";
import { strings } from "@/pages/login/strings";
import { render, screen } from "@testing-library/react";
import React from "react";

const useContextStub = jest.spyOn(React, "useContext");

jest.mock("react-router-dom");

jest.mock("@/hooks/login", () => ({
  useIsAuthenticated: jest.fn(() => false),
  useLoginMutation: jest.fn(() => [jest.fn(), { loading: false }]),
}));

describe("Page Login", () => {
  beforeEach(() => {
    useContextStub.mockImplementation(() => ({ language: "EN" }));
  });

  it("Should render without crashing", () => {
    render(<Login />);
    const texts = strings["EN"];
    const formTitle = screen.getByText(texts.title);
    expect(formTitle).toBeInTheDocument();
  });
});
