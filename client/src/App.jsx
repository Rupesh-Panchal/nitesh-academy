import { Routes, Route, Navigate } from "react-router-dom";
import AdminSignup from "./pages/account/AdminSignup";
import AdminLogin from "./pages/account/AdminLogin";
import Home from "./pages/Home";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageAchievers from "./pages/admin/ManageAchievers";
import AddAchiever from "./pages/admin/AddAchiever";
import AddFeature from "./pages/admin/AddFeature";
import ManageFeatures from "./pages/admin/ManageFeatures";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return ( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/signup" element={<AdminSignup />} />
            <Route path="/admin/dashboard" element={<ProtectedRoute roleRequired="admin"><AdminDashboard /></ProtectedRoute>}/>
            <Route path="/admin/add-achiever" element={<ProtectedRoute roleRequired="admin"><AddAchiever /></ProtectedRoute>}/>
            <Route path="/admin/manage-achievers" element={<ProtectedRoute roleRequired="admin"><ManageAchievers /></ProtectedRoute>}/>
            <Route path="/admin/add-feature" element={<ProtectedRoute roleRequired="admin"><AddFeature /></ProtectedRoute>}/>
            <Route path="/admin/manage-features" element={<ProtectedRoute roleRequired="admin"><ManageFeatures /></ProtectedRoute>}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
export default App;
