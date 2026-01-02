import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import "./adminDashboard.css";
const AdminDashboard = () => {
  return (
    <div className="admin">
      <aside>
        <AdminSidebar />
      </aside>

      <main>
        <Outlet /> {/* nested routes will be rendered here */}
      </main>
    </div>
  );
};

export default AdminDashboard;
