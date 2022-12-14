import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { auth } from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  // console.log(location);
  if (loading) {
    return <Loading></Loading>;
  } else if (!user || !localStorage.getItem("user") === "admin") {
    return <Navigate to="/login" state={{ from: location }} />;
    // return <Navigate to="/login" state={{ from: location }} replace />;
  } else return children;
};

export default RequireAuth;
