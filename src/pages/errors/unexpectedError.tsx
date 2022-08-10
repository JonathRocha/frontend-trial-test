import { LanguageContext } from "@/contexts/language";
import { strings } from "@/pages/errors/strings";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const UnexpectedError = () => {
  const { language } = useContext(LanguageContext);
  const localizedTexts = strings[language];

  return (
    <section className="unexpected-error">
      <h1>{localizedTexts.unexpected.title}</h1>
      <p>{localizedTexts.unexpected.description}</p>
      <Link to="/account">{localizedTexts.unexpected.links.account}</Link>
    </section>
  );
};
