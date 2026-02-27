// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles/Auth.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/login",
//         form
//       );

//       const role = res.data.role;

//       if (role === "admin") {
//         navigate("/admin-dashboard");
//       } else if (role === "student") {
//         navigate("/student-dashboard");
//       } else {
//         alert("Unknown role");
//       }

//     } catch (err) {
//       alert("Invalid Credentials ❌");
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-box">

//         <div className="auth-content">
//           <h2>Welcome Back 👋</h2>
//           <p>Please login to your account</p>

//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 required
//                 onChange={(e) =>
//                   setForm({ ...form, email: e.target.value })
//                 }
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 onChange={(e) =>
//                   setForm({ ...form, password: e.target.value })
//                 }
//               />
//             </div>

//             <button type="submit" className="primary-btn">
//               Login
//             </button>
//           </form>

//           <div className="bottom-text">
//             Don’t have an account?{" "}
//             <Link to="/signup">Signup</Link>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Login;




import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/login",
        form
      );

      console.log("Login Response:", res.data);

      // 🔥 Save user to localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: res.data.user.id,
          name: res.data.user.name,
          email: res.data.user.email,
          role: res.data.role,
        })
      );

      // 🔥 Role-based redirect
      if (res.data.role === "admin") {
        navigate("/admin-dashboard");
      } else if (res.data.role === "student") {
        navigate("/student-dashboard");
      } else {
        alert("Unknown role");
      }

    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Invalid Credentials ❌"
      );
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">

        <div className="auth-content">
          <h2>Welcome Back 👋</h2>
          <p>Please login to your account</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                required
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />
            </div>

            <button type="submit" className="primary-btn">
              Login
            </button>
          </form>

          <div className="bottom-text">
            Don’t have an account?{" "}
            <Link to="/signup">Signup</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;