import { LOGIN_MUTATION, LoginMutationData, LoginMutationVars } from "@/hooks/useLogin/definition";
import { MutationHookOptions, useMutation } from "@apollo/client";

export function useLoginMutation(options?: MutationHookOptions<LoginMutationData, LoginMutationVars>) {
  return useMutation<LoginMutationData, LoginMutationVars>(LOGIN_MUTATION, options);
}
