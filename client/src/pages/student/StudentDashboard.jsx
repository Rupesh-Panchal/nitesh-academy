import Sidebar from "../../components/Sidebar";
import "../../styles/Dashboard.css";

const StudentDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard-container">
      <Sidebar role="student" />

      <div className="dashboard-content">
        <h1>Student Dashboard 🎓</h1>
        <p>Welcome, {user?.name}</p>

        <div className="card-grid">
          <div className="card">My Courses</div>
          <div className="card">Profile</div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;