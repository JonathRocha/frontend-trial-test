import { LanguageContext } from "@/contexts/language";
import { useIsAuthenticated } from "@/hooks/login";
import { strings } from "@/pages/errors/strings";
import { useContext } from "react";
import { Link } from "react-router-dom";

import "@/pages/errors/styles.scss";

export const NotFound = () => {
  const isAuthenticated = useIsAuthenticated();
  const { language } = useContext(LanguageContext);
  const localizedTexts = strings[language];

  return (
    <section className="not-found">
      <h1>404</h1>
      <p>{localizedTexts.notFound.description}</p>
      <Link to={isAuthenticated ? "/account" : "/login"}>
        {isAuthenticated ? localizedTexts.notFound.links.account : localizedTexts.notFound.links.login}
      </Link>
    </section>
  );
};
