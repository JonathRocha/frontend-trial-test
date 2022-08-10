import "@/components/languageSwitcher/styles.scss";
import { LanguageContext } from "@/contexts/language";
import { useCallback, useContext } from "react";

export const LanguageSwitcher = () => {
  const [lang, setLang] = useContext(LanguageContext);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.target.checked ? setLang("PT") : setLang("EN");
    },
    [setLang],
  );

  return (
    <div className="switch">
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        checked={lang === "PT"}
        onChange={handleChange}
      />
      <label htmlFor="language-toggle"></label>
      <span className="on">EN</span>
      <span className="off">PT</span>
    </div>
  );
};
