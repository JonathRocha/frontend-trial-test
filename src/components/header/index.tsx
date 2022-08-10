import { strings } from "@/components/header/strings";
import { LanguageSwitcher } from "@/components/languageSwitcher";
import { LanguageContext } from "@/contexts/language";
import { useIsAuthenticated, useLogout } from "@/hooks/login";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "@/components/header/styles.scss";

export const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const { logout } = useLogout();
  const { language } = useContext(LanguageContext);
  const localizedStrings = strings[language];

  const handleLogout = useCallback(() => {
    logout();
    navigate("/login", { replace: true });
  }, [logout, navigate]);

  return (
    <header className="header">
      <LanguageSwitcher />
      {isAuthenticated && (
        <button className="header_logout" type="button" onClick={handleLogout}>
          {localizedStrings.buttons.logout}
        </button>
      )}
    </header>
  );
};
