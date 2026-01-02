import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminDashBoard from "./pages/dashboard/AdminDashBoard";
import Unauthorized from "./pages/Unauthorized";
import NavBare from "./components/NavBare";
import Footer from "./components/Footer";

import ManageUsers from "./pages/dashboard/manageUsers";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { current } from "./JS/features/authSlice";
import AdminRoute from "./routes/AdminRoute";

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <>
      {user && <NavBare />}
      <Routes>
        {/* routes pour afficher Form login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* routes for admin dashboard (including register page) */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashBoard />
            </AdminRoute>
          }
        >
          {/* nested routes */}
          <Route path="register" element={<Register />} />{" "}
          <Route path="manageusers" element={<ManageUsers />} />
        </Route>

        {/* route sortie quand il n'est pas autorisé */}
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
      {user && <Footer />}
    </>
  );
}

export default App;
