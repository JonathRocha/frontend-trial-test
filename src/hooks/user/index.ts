import { GET_USER_QUERY, UserQueryData, UserQueryVars } from "@/hooks/user/definition";
import { QueryHookOptions, useQuery } from "@apollo/client";

export function useGetUserQuery(options?: QueryHookOptions<UserQueryData, UserQueryVars>) {
  return useQuery<UserQueryData, UserQueryVars>(GET_USER_QUERY, options);
}
