import { Navigate, Outlet,useLocation} from "react-router-dom";
import { useAuth } from "context/auth-context";

const PublicRoute = () => {
  const {
    authState: { authToken },
  } = useAuth();
  const location = useLocation()
  console.log(location)
  return authToken === "" ? <Outlet /> : <Navigate to={location.state.from.pathname} />;
};

export { PublicRoute };
