import { Navigate } from "react-router-dom";
import { selectUser } from "../store/auth/selectors";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectUser);
  return user ? children : <Navigate to="/register" />;
};

export default PrivateRoute;
