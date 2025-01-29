import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = sessionStorage.getItem("isLogin") === "true";
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
