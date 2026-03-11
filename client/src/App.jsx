// import { Routes, Route, Navigate } from "react-router-dom";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import StudentDashboard from "./pages/student/StudentDashboard";

// function App() {
//   return (
//     <Routes>

//       {/* Default Route */}
//       <Route path="/" element={<Login />} />

//       {/* Auth Routes */}
//       <Route path="/signup" element={<Signup />} />

//       {/* Dashboard Routes */}
//       <Route path="/admin-dashboard" element={<AdminDashboard />} />
//       <Route path="/student-dashboard" element={<StudentDashboard />} />

//       {/* 404 Fallback */}
//       <Route path="*" element={<Navigate to="/" />} />





//     </Routes>
//   );
// }

// export default App;



// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import StudentDashboard from "./pages/student/StudentDashboard";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <Routes>

//       {/* Public Routes */}
//       <Route path="/" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />

//       {/* Protected Admin Route */}
//       <Route
//         path="/admin-dashboard"
//         element={
//           <ProtectedRoute roleRequired="admin">
//             <AdminDashboard />
//           </ProtectedRoute>
//         }
//       />

//       {/* Protected Student Route */}
//       <Route
//         path="/student-dashboard"
//         element={
//           <ProtectedRoute roleRequired="student">
//             <StudentDashboard />
//           </ProtectedRoute>
//         }
//       />

//       {/* 404 */}
//       <Route path="*" element={<Navigate to="/" />} />

//       <Route
//         path="/manage-users"
//         element={
//           <ProtectedRoute roleRequired="admin">
//             <ManageUsers />
//           </ProtectedRoute>
//         }
//       />




//     </Routes>
//   );
// }

// export default App;


import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import AdminDashboard from "./pages/admin/AdminDashboard";
import Admin from "./pages/admin/AdminDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import ManageUsers from "./pages/admin/ManageUsers";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

function App() {

  return (

    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/a" element={<Admin />} />
      <Route path="/home" element={<Home />} />

      {/* Admin Dashboard */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute roleRequired="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Student Dashboard */}
      <Route
        path="/student-dashboard"
        element={
          <ProtectedRoute roleRequired="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      {/* Manage Users */}
      <Route
        path="/manage-users"
        element={
          <ProtectedRoute roleRequired="admin">
            <ManageUsers />
          </ProtectedRoute>
        }
      />

      {/* 404 Redirect */}
      <Route path="*" element={<Navigate to="/" />} />
      

    </Routes>

  );

}

export default App;