import { useSelector } from "react-redux";
import { selectUser } from "../store/auth/selectors";
import { Navigate } from "react-router-dom";
import { selectPath } from "../store/books/selectors";

const PublicRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const path = useSelector(selectPath);

  if (!user) {
    return children;
  }
  return <Navigate to={path ?? "/recommended"} />;
};

export default PublicRoute;
