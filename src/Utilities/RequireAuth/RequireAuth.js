import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { auth } from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user || !localStorage.getItem("user") === "admin") {
    return <Navigate to="/login" state={{ from: "/" }} replace />;
  }
  return children;
};

export default RequireAuth;
