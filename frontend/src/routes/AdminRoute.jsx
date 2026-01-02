import { Navigate } from "react-router-dom";
import Spiner from "../components/Spiner";
import { useSelector } from "react-redux";

const AdminRoute = ({ children }) => {
  const { user, loading, initializing } = useSelector((state) => state.auth);
  if (initializing || loading) {
    return <Spiner />
  }

  if (!user) return <Navigate to="/login" replace />;
  if (!user.role || user.role.titre !== "ADMIN") {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
};

export default AdminRoute;
