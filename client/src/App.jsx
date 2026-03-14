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


// import { Routes, Route, Navigate } from "react-router-dom";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// import AdminDashboard from "./pages/admin/AdminDashboard";
// import Admin from "./pages/admin/AdminDashboard";
// // import StudentDashboard from "./pages/student/StudentDashboard";
// // import ManageUsers from "./pages/admin/ManageUsers";

// import ProtectedRoute from "./components/ProtectedRoute";
// import Home from "./pages/Home";
// // import Home1 from "./pages/Home1";


// function App() {

//   return (

//     <Routes>

//       {/* Public Routes */}
//       <Route path="/" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/a" element={<Admin />} />
//       <Route path="/home" element={<Home />} />
//       {/* <Route path="/home1" element={<Home1 />} /> */}

//       {/* Admin Dashboard */}
//       <Route
//         path="/admin-dashboard"
//         element={
//           <ProtectedRoute roleRequired="admin">
//             <AdminDashboard />
//           </ProtectedRoute>
//         }
//       />

//       {/* Student Dashboard */}
//       <Route
//         path="/student-dashboard"
//         element={
//           <ProtectedRoute roleRequired="student">
//             <StudentDashboard />
//           </ProtectedRoute>
//         }
//       />

//       {/* Manage Users */}
//       <Route
//         path="/manage-users"
//         element={
//           <ProtectedRoute roleRequired="admin">
//             <ManageUsers />
//           </ProtectedRoute>
//         }
//       />

//       {/* 404 Redirect */}
//       <Route path="*" element={<Navigate to="/" />} />


//     </Routes>

//   );

// }

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";

/* AUTH */
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* PAGES */
import Home from "./pages/Home";

/* ADMIN */
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageAchievers from "./pages/admin/ManageAchievers";
import AddAchiever from "./pages/admin/AddAchiever";
import AddFeature from "./pages/admin/AddFeature";
import ManageFeatures from "./pages/admin/ManageFeatures";

/* PROTECTED ROUTE */
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}

      <Route path="/" element={<Navigate to="/nitish.academy" />} />

      <Route path="/nitish.academy" element={<Home />} />

      <Route path="/nitish.academy/admin/login" element={<Login />} />

      <Route path="/nitish.academy/admin/signup" element={<Signup />} />



      {/* PROTECTED ADMIN ROUTES */}

      <Route
        path="/nitish.academy/admin/dashboard"
        element={
          <ProtectedRoute roleRequired="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nitish.academy/admin/add-achiever"
        element={
          <ProtectedRoute roleRequired="admin">
            <AddAchiever />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nitish.academy/admin/manage-achievers"
        element={
          <ProtectedRoute roleRequired="admin">
            <ManageAchievers />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nitish.academy/admin/add-feature"
        element={
          <ProtectedRoute roleRequired="admin">
            <AddFeature />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nitish.academy/admin/manage-features"
        element={
          <ProtectedRoute roleRequired="admin">
            <ManageFeatures />
          </ProtectedRoute>
        }
      />


      {/* 404 */}

      <Route path="*" element={<Navigate to="/nitish.academy" />} />

    </Routes>
  );
}

export default App;