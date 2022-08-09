import { gql } from "@apollo/client";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

export interface UserQueryVars {
  id: string;
}

export interface UserQueryData {
  user: User;
}

export const GET_USER_QUERY = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
    }
  }
`;
