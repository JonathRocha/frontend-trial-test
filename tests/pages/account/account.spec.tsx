import * as loginHooks from "@/hooks/login";
import * as userHooks from "@/hooks/user";
import { Account } from "@/pages/account";
import { strings } from "@/pages/account/strings";
import { render, screen } from "@testing-library/react";
import React from "react";

const useContextStub = jest.spyOn(React, "useContext");
const useUserIdFromTokenStub = jest.spyOn(loginHooks, "useUserIdFromToken");
const useGetUserQueryStub = jest.spyOn(userHooks, "useGetUserQuery");

describe("Page Account", () => {
  beforeEach(() => {
    useContextStub.mockImplementation(() => ({ language: "EN" }));
    useUserIdFromTokenStub.mockImplementation(() => 1);
    useGetUserQueryStub.mockImplementation(() => ({
      loading: false,
      data: { user: { id: "1", firstName: "John", lastName: "Doe" } },
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
    }));
  });

  it("Should render without crashing", () => {
    render(<Account />);
    const texts = strings["EN"];
    const formTitle = screen.getByText(texts.title);
    expect(formTitle).toBeInTheDocument();
  });
});
