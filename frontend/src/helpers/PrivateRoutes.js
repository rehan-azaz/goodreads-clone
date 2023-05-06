import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

const PrivateRoutes = ({ children }) => {

  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoutes;