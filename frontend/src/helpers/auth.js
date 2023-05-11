import { isExpired, decodeToken } from "react-jwt";

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

  return decodedToken?.user?.role;
};

export const logout = () => {
  localStorage.removeItem("token");
};
