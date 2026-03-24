import { Routes, Route, Navigate } from "react-router-dom";
import AdminSignup from "./pages/account/AdminSignup";
import AdminLogin from "./pages/account/AdminLogin";
import Home from "./pages/Home";
import AdminDashboard from "./pages/admin/Dashboard";
import AddAchiever from "./pages/admin/Achiever";
import Features from "./pages/admin/Feature";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return ( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/signup" element={<AdminSignup />} />
            <Route path="/admin/dashboard" element={<ProtectedRoute roleRequired="admin"><AdminDashboard /></ProtectedRoute>}/>
            <Route path="/admin/add-achiever" element={<ProtectedRoute roleRequired="admin"><AddAchiever /></ProtectedRoute>}/>
            <Route path="/admin/features" element={<ProtectedRoute roleRequired="admin"><Features /></ProtectedRoute>}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
export default App;
