import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "context/auth-context";

const PublicRoute = () => {
  const {
    authState: { authToken },
  } = useAuth();
  return authToken === "" ? <Outlet /> : <Navigate to="/" />;
};

export { PublicRoute };
