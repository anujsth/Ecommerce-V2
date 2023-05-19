import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { loggedIn } = useSelector((state) => state.authentication);

  if (!loggedIn) {
    return <Navigate to="/signin" />;
  }
  return <>{children}</>;
};

export default Protected;
