import { logout } from "../helpers/auth";
import { useEffect } from "react";

const PublicRoute = ({ children }) => {
  useEffect(() => {
    logout();
  });
  return <>{children}</>;
};

export default PublicRoute;
