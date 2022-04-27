import { Navigate, Outlet,useLocation} from "react-router-dom";
import { useAuth } from "context/auth-context";

const PublicRoute = () => {
  const {
    authState: { authToken },
  } = useAuth();
  const location = useLocation()
  
const path1 = location?.state?.from?.pathname
  return authToken === "" ? <Outlet /> : <Navigate to={location.state.from.pathname} />;
};

export { PublicRoute };
