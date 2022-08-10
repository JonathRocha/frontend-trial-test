import "@/components/languageSwitcher/styles.scss";
import { LanguageContext } from "@/contexts/language";
import { useCallback, useContext } from "react";

export const LanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      changeLanguage(event.target.checked ? "PT" : "EN");
    },
    [changeLanguage],
  );

  return (
    <div className="switch">
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        checked={language === "PT"}
        onChange={handleChange}
      />
      <label htmlFor="language-toggle"></label>
      <span className="on">EN</span>
      <span className="off">PT</span>
    </div>
  );
};
