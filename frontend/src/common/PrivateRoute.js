import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../helpers/auth";
import Layout from './Layout'

const PrivateRoutes = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Layout>
        {children}
      </Layout>
    </>
  );
};

export default PrivateRoutes;
