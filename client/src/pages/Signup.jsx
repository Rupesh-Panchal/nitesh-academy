import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/Signup.css";
import signupIllustration from "../assets/signupIllustration.webp";
import nitishLogo from "../assets/nitishLogo.png";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/signup", {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        password: form.password,
      });
      alert(res.data.message);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Signup Failed ❌");
    }
  };

  return (
    <div className="pageWrapper">
      <div className="mainContainer">
        {/* LEFT SIDE */}
        <div
          className="imageSection"
          style={{ backgroundImage: `url(${signupIllustration})` }}
        ></div>

        {/* RIGHT SIDE */}
        <div className="formSection">
          <p className="registerHeading">Create your account</p>
          <p className="subtitle">
            Let’s get you all set up so you can access your personal account.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="formGroup">
                <label className="formLabel">First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  value={form.firstName}
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                />
              </div>

              <div className="formGroup">
                <label className="formLabel">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  value={form.lastName}
                  onChange={(e) =>
                    setForm({ ...form, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="formGroup">
                <label className="formLabel">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="formGroup">
                <label className="formLabel">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="formGroup">
              <label className="formLabel">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <div className="formGroup">
              <label className="formLabel">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
              />
            </div>

            <button type="submit" className="primaryBtn">
              Create account
            </button>
          </form>

          <p className="loginText">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
