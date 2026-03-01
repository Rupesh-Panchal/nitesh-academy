import { Routes, Route } from "react-router-dom";
import StudentLogin from "../pages/student/StudentLogin";
import StudentDashboard from "../pages/student/StudentDashboard";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminSignup from "../pages/admin/AdminSignup";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StudentLogin />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/signup" element={<AdminSignup />} />

      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
