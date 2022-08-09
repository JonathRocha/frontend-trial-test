import { gql } from "@apollo/client";

interface LoginVars {
  identifier: string;
  password: string;
  provider: string;
}

interface LoginData {
  jwt: string;
}

export interface LoginMutationData {
  login: LoginData;
}

export interface LoginMutationVars {
  input: LoginVars;
}

export interface TokeClaims {
  id: number;
  exp: number;
  iat: number;
}

export const TOKEN_KEY = "frontend-trial-token";

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
    }
  }
`;
