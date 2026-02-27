import Sidebar from "../../components/Sidebar";
import "../../styles/Dashboard.css";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard-container">
      <Sidebar role="admin" />

      <div className="dashboard-content">
        <h1>Admin Dashboard 👑</h1>
        <p>Welcome, {user?.name}</p>

        <div className="card-grid">
          <div className="card">Total Students: 25</div>
          <div className="card">Total Admins: 3</div>
          <div className="card">System Active</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;