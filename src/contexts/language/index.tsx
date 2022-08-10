/* eslint-disable react/prop-types */
import { createContext, useCallback, useState } from "react";
import { Language, LanguageContextType, LANGUAGE_KEY } from "@/contexts/language/definition";

export const LanguageContext = createContext<LanguageContextType>(null);

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState<Language>((localStorage.getItem(LANGUAGE_KEY) as Language) ?? "EN");

  const changeLanguage = useCallback((language: Language) => {
    localStorage.setItem(LANGUAGE_KEY, language);
    setLanguage(language);
  }, []);

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
};
