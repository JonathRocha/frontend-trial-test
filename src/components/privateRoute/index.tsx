import { useIsAuthenticated } from "@/hooks/login";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const PrivateRoute = () => {
  const { pathname } = useLocation();
  const isAuthorized = useIsAuthenticated();

  if (isAuthorized) {
    return pathname === "/" ? <Navigate to="/account" /> : <Outlet />;
  }

  return <Navigate to="/login" replace />;
};
