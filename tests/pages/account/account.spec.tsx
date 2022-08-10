import * as loginHooks from "@/hooks/login";
import * as userHooks from "@/hooks/user";
import { User } from "@/hooks/user/definition";
import { Account } from "@/pages/account";
import { strings } from "@/pages/account/strings";
import { render, screen } from "@testing-library/react";
import React from "react";

const useContextStub = jest.spyOn(React, "useContext");
const useUserIdFromTokenStub = jest.spyOn(loginHooks, "useUserIdFromToken");
const useGetUserQueryStub = jest.spyOn(userHooks, "useGetUserQuery");

describe("Page Account", () => {
  const user: User = {
    id: "1",
    firstName: "John",
    lastName: "Doe",
  };

  const useGetUserQueryStubReturn = {
    loading: false,
    data: { user },
    error: null,
    client: null,
    called: false,
    observable: null,
    refetch: jest.fn(),
    startPolling: jest.fn(),
    stopPolling: jest.fn(),
    updateQuery: jest.fn(),
    fetchMore: jest.fn(),
    reobserve: jest.fn(),
    subscribeToMore: jest.fn(),
    networkStatus: 0,
    variables: null,
  };

  beforeEach(() => {
    useContextStub.mockImplementation(() => ({ language: "EN" }));
    useUserIdFromTokenStub.mockImplementation(() => 1);
    useGetUserQueryStub.mockImplementation(() => useGetUserQueryStubReturn);
  });

  it("Should render without crashing", () => {
    render(<Account />);
    const texts = strings["EN"];
    const title = screen.getByText(texts.title);
    expect(title).toBeInTheDocument();
  });

  it("Should contain texts with localization", () => {
    useContextStub.mockReturnValue({ language: "PT" });

    render(<Account />);

    const texts = strings["PT"];
    const title = screen.getByText(texts.title);
    const firstName = screen.getByLabelText(texts.inputs.firstName.label);
    const lastName = screen.getByLabelText(texts.inputs.lastName.label);

    expect(title).toBeInTheDocument();
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
  });

  it("Should render user details returned by user query", () => {
    render(<Account />);

    const firstName = screen.queryByTestId("firstName");
    const lastName = screen.queryByTestId("lastName");

    expect(firstName.getAttribute("value")).toBe(user.firstName);
    expect(lastName.getAttribute("value")).toBe(user.lastName);
  });

  it("Should render loading message if user query is loading", () => {
    useGetUserQueryStub.mockReturnValue({ ...useGetUserQueryStubReturn, loading: true });

    render(<Account />);

    const texts = strings["EN"];

    const loading = screen.queryByText(texts.loading);
    expect(loading).toBeInTheDocument();
  });
});
