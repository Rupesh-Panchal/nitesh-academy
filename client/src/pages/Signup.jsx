// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import "../styles/Auth.css";

// // const Signup = () => {
// //   const navigate = useNavigate();

// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     role: "student",
// //   });

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     navigate("/");
// //   };

// //   return (
// //     <div className="auth-wrapper">
// //       <div className="auth-box">

// //         <div className="auth-content">
// //           <h2>Create Account 🚀</h2>
// //           <p>Join Nitesh Academy</p>

// //           <form onSubmit={handleSubmit}>
// //             <div className="form-group">
// //               <input
// //                 type="text"
// //                 placeholder="Full Name"
// //                 onChange={(e) =>
// //                   setForm({ ...form, name: e.target.value })
// //                 }
// //               />
// //             </div>

// //             <div className="form-group">
// //               <input
// //                 type="email"
// //                 placeholder="Email Address"
// //                 onChange={(e) =>
// //                   setForm({ ...form, email: e.target.value })
// //                 }
// //               />
// //             </div>

// //             <div className="form-group">
// //               <input
// //                 type="password"
// //                 placeholder="Password"
// //                 onChange={(e) =>
// //                   setForm({ ...form, password: e.target.value })
// //                 }
// //               />
// //             </div>

// //             <div className="form-group">
// //               <select
// //                 onChange={(e) =>
// //                   setForm({ ...form, role: e.target.value })
// //                 }
// //               >
// //                 <option value="student">Student</option>
// //                 <option value="admin">Admin</option>
// //               </select>
// //             </div>

// //             <button className="primary-btn">Signup</button>
// //           </form>

// //           <div className="bottom-text">
// //             Already have an account? <Link to="/">Login</Link>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Signup;



// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "../styles/Auth.css";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.password || !form.role) {
//       alert("All fields are required");
//       return;
//     }

//     console.log(form);
//     navigate("/");
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-box">
//         <h2>Create Account</h2>

//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="Full Name"
//               onChange={(e) =>
//                 setForm({ ...form, name: e.target.value })
//               }
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Email Address"
//               onChange={(e) =>
//                 setForm({ ...form, email: e.target.value })
//               }
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) =>
//                 setForm({ ...form, password: e.target.value })
//               }
//             />
//           </div>

//           {/* ROLE INPUT */}
//           <div className="form-group">
//             <label>Select Role</label>
//             <select
//               value={form.role}
//               onChange={(e) =>
//                 setForm({ ...form, role: e.target.value })
//               }
//             >
//               <option value="">-- Choose Role --</option>
//               <option value="student">Student</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>

//           <button className="primary-btn">Signup</button>
//         </form>

//         <div className="bottom-text">
//           Already have account? <Link to="/">Login</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/Auth.css";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.role) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/signup",
        form
      );

      alert(res.data.message);
      navigate("/"); // go to login after signup

    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Signup Failed ❌"
      );
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>Create Account 🚀</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              required
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </div>

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

          <div className="form-group">
            <select
              required
              value={form.role}
              onChange={(e) =>
                setForm({ ...form, role: e.target.value })
              }
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="primary-btn">
            Signup
          </button>
        </form>

        <div className="bottom-text">
          Already have account?{" "}
          <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;