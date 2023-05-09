import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../helpers/auth";
import Layout from './Layout'
import { useEffect } from "react";

const PublicRoutes = ({ children }) => {
  useEffect(()=> {
    
  })
  return (
    <>
      <Layout>
        {children}
      </Layout>
    </>
  );
};

export default PublicRoutes;
