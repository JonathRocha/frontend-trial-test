import { LanguageSwitcher } from "@/components/languageSwitcher";
import { useIsAuthenticated, useLogout } from "@/hooks/login";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "@/components/header/styles.scss";

export const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const { logout } = useLogout();

  const handleLogout = useCallback(() => {
    logout();
    navigate("/login", { replace: true });
  }, [logout, navigate]);

  // if (!isAuthenticated) {
  //   return null;
  // }

  return (
    <header className="header">
      <LanguageSwitcher />
      {isAuthenticated && (
        <button className="header_logout" type="button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </header>
  );
};
