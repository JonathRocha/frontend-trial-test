import { useIsAuthenticated } from "@/hooks/login";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const isAuthorized = useIsAuthenticated();
  return isAuthorized ? <Outlet /> : <Navigate to="/login" replace />;
};
