import { User } from "@/hooks/useUser/definition";
import { gql } from "@apollo/client";

interface LoginVars {
  identifier: string;
  password: string;
  provider: string;
}

interface LoginData {
  jwt: string;
  user: User;
}

export interface LoginMutationData {
  login: LoginData;
}

export interface LoginMutationVars {
  input: LoginVars;
}

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        username
        email
        confirmed
        blocked
        role {
          id
          name
          description
          type
        }
      }
    }
  }
`;
