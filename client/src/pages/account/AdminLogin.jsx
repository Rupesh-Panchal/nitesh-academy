import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginAPI } from "../../api/api";
import styles from "./AdminLogin.module.css";
import login from "../../assets/login.png";

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({email: "", password: "",});
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            alert("All fields are required");
            return;
        }
        try {
            const res = await loginAPI({email: form.email, password: form.password,});
            if (res.data.token) {
                localStorage.setItem("user", JSON.stringify({role: res.data.role, token: res.data.token,}));
            }
            navigate("/admin/dashboard");
        } catch (err) {
              alert(err.response?.data?.message || "Login Failed ❌");
        }
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.mainContainer}>
                {/* LEFT IMAGE */}
                <div className={styles.imageSection} style={{ backgroundImage: `url(${login})` }}></div>
                {/* RIGHT FORM */}
                <div className={styles.formSection}>
                    <p className={styles.registerHeading}>Login to your account</p>
                    <p className={styles.subtitle}>Welcome back! Please enter your credentials.</p>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Email</label>
                            <input type="email" placeholder="Enter your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Password</label>
                            <input type="password" placeholder="Enter password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}/>
                        </div>
                        <button type="submit" className={styles.primaryBtn}>Login</button>
                    </form>
                    <p className={styles.loginText}>Don’t have an account? <Link to="/signup">Register</Link></p>
                </div>
            </div>
        </div>
    );
};
export default Login;