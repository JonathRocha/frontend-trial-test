import { App } from "@/App";
import { TOKEN_KEY } from "@/hooks/login/definition";
import { ApolloClient, ApolloLink, ApolloProvider, concat, HttpLink, InMemoryCache } from "@apollo/client";
import { createRoot } from "react-dom/client";

const httpLink = new HttpLink({ uri: process.env.API_URL });
const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(TOKEN_KEY);
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  }));
  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache({ addTypename: false }),
  link: concat(authMiddleware, httpLink),
});

const root = createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
