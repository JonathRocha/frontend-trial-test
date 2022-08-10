/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const LanguageContext = createContext<["EN" | "PT", React.Dispatch<React.SetStateAction<string>>]>(null);

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState<"EN" | "PT">("EN");
  return <LanguageContext.Provider value={[language, setLanguage]}>{children}</LanguageContext.Provider>;
};
