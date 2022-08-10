import { StringsLocalization } from "@/pages/login/definition";

export const strings: StringsLocalization = {
  title: "Acessar",
  inputs: {
    email: {
      label: "E-mail",
      required: "E-mail é obrigatório",
      invalid: "E-mail inválido",
    },
    password: {
      label: "Senha",
      required: "Senha é obrigatória",
    },
  },
  buttons: {
    submit: "Enviar",
    loading: "Carregando...",
  },
  errors: {
    unexpected: "Algo deu errado, por favor tente novamente.",
  },
};
