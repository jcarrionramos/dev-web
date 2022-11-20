import { Navigate } from "react-router-dom";
import { jwtAuthenticated } from "./jwtAuthenticated";

const RequireAuth = ({ children }) => {
  return jwtAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
