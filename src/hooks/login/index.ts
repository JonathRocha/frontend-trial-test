import { LoginMutationData, LoginMutationVars, LOGIN_MUTATION, TokeClaims, TOKEN_KEY } from "@/hooks/login/definition";
import { MutationHookOptions, useMutation } from "@apollo/client";
import jwtDecode from "jwt-decode";

export function useLoginMutation(options?: MutationHookOptions<LoginMutationData, LoginMutationVars>) {
  return useMutation<LoginMutationData, LoginMutationVars>(LOGIN_MUTATION, options);
}

export function useIsAuthenticated() {
  const token = localStorage.getItem(TOKEN_KEY);
  try {
    const claims = jwtDecode<TokeClaims>(token);
    return !!token && Date.now() < claims.exp * 1000;
  } catch (error) {
    // Invalid token
    return false;
  }
}

export function useUserIdFromToken() {
  const token = localStorage.getItem(TOKEN_KEY);
  try {
    const claims = jwtDecode<TokeClaims>(token);
    return claims.id;
  } catch (error) {
    // Invalid token
    return null;
  }
}

export function useLogout() {
  return {
    logout: () => {
      localStorage.removeItem(TOKEN_KEY);
    },
  };
}
