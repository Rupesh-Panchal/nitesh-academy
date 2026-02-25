import { useState } from "react";
import { adminSignup } from "../../api/auth";

const AdminSignup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await adminSignup(form);
      alert("Admin Registered Successfully");
    } catch (err) {
      alert("Signup Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Admin Signup</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
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
      <button>Register</button>
    </form>
  );
};

export default AdminSignup;