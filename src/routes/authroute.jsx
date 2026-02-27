import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../Service/Auth.api";

const AuthRoute = ({ children }) => {
  return isAuthenticated()
    ? <Navigate to="/dashboard" replace />
    : children;
};

export default AuthRoute;