// ProtectedRoute.js
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  if (!localStorage.getItem('userId')) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
