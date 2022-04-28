import { Navigate, Outlet,useLocation} from "react-router-dom";
import { useAuth } from "context/auth-context";

const PublicRoute = () => {
  const {
    authState: { authToken },
  } = useAuth();
  const location = useLocation()
  
const prevPath = location?.state?.from?.pathname
  return authToken === "" ? <Outlet /> : <Navigate to={prevPath ===undefined ? "/" : prevPath} />;
};

export { PublicRoute };
