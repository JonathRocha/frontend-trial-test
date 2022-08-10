export const LANGUAGE_KEY = "frontend-trial-test-lang";

export type Language = "EN" | "PT";

export interface LanguageContextType {
  language: Language;
  changeLanguage: (language: Language) => void;
}
