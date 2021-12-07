import "../styles/Header.css";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuthentification = ({ children }) => {
  let isConnected = useSelector((state) => state.isConnected);
  let location = useLocation();

  if (!isConnected) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuthentification;
