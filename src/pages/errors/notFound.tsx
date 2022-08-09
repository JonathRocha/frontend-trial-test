import { useIsAuthenticated } from "@/hooks/login";
import { Link } from "react-router-dom";

import "@/pages/errors/styles.scss";

export const NotFound = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to={isAuthenticated ? "/account" : "/login"}>{isAuthenticated ? "Go to account" : "Go to login"}</Link>
    </section>
  );
};
