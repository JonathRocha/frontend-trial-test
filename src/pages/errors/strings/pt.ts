import { StringLocalization } from "@/pages/errors/definition";

export const strings: StringLocalization = {
  notFound: {
    description: "A página que você procura não existe.",
    links: {
      account: "Voltar ao perfil",
      login: "Voltar ao login",
    },
  },
  unexpected: {
    title: "Algo aconteceu",
    description: "Um erro inexperado aconteceu. Por favor, tente novamente mais tarde.",
    links: {
      account: "Voltar ao perfil",
    },
  },
};
