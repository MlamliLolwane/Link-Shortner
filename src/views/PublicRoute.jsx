// ProtectedRoute.js
import { Navigate } from "react-router";

const PublicRoute = ({ children }) => {
  if (localStorage.getItem('userId')) {
    return <Navigate to="/authenticated/home" replace />;
  }

  return children;
};

export default PublicRoute;
