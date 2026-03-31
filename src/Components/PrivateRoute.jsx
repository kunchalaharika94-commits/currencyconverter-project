import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const user = localStorage.getItem("user");
  
  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

export default PrivateRoute;