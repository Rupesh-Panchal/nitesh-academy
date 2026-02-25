// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import AdminSignup from "./pages/AdminSignup";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/admin-signup" element={<AdminSignup />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




import AppRoutes from "./routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;