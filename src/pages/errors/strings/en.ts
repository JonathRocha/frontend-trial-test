import { StringLocalization } from "@/pages/errors/definition";

export const strings: StringLocalization = {
  notFound: {
    description: "The page you are looking for does not exist.",
    links: {
      account: "Go to account",
      login: "Go to login",
    },
  },
  unexpected: {
    title: "Something wrong happened",
    description: "An unexpected error has occurred. Please, try again later.",
    links: {
      account: "Go to account",
    },
  },
};
