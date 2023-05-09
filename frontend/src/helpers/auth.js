import { isExpired, decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false; // Token is not available in local storage
  }
  const isTokenExpired = isExpired(token);
  return !isTokenExpired;
};
export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false; // Token is not available in local storage
  }

  return token;
};

export const getUserRole = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false; // Token is not available in local storage
  }

  const decodedToken = decodeToken(token);
  console.log(decodedToken);
  return decodedToken?.user?.user?.role;
};