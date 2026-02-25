import { useState, useContext } from "react";
import { studentLogin } from "../../api/auth";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await studentLogin(form);
      login(res.data);
      navigate("/student/dashboard");
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button>Login</button>
    </form>
  );
};

export default StudentLogin;