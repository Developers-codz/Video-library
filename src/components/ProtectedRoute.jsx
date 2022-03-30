import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "context/auth-context";

const ProtectedRoute = () => {
  const {
    authState: { authToken },
  } = useAuth();
  return authToken === "" ? <Navigate to="/login" /> : <Outlet />;
};
export { ProtectedRoute };
