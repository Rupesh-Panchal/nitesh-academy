import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const StudentDashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Student Dashboard 🎓</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default StudentDashboard;