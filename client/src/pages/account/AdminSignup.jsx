import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupAPI } from "../../api/api";
import styles from "./AdminSignup.module.css";
import signupIllustration from "../../assets/signupIllustration.webp";

const Signup = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({firstName: "", lastName: "", email: "", phone: "", password: "", confirmPassword: "",});
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.password || !form.confirmPassword) {
          alert("All fields are required");
          return;
        }
        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const res = await signupAPI({firstName: form.firstName, lastName: form.lastName, email: form.email, phone: form.phone, password: form.password,});
            localStorage.setItem("user", JSON.stringify({role: res.data?.role || "admin", token: res.data?.token || null,}));
            navigate("/admin/dashboard");
        } catch (err) {
            alert(err.response?.data?.message || "Signup Failed ❌");
        }
    };

    const isFormValid = form.firstName && form.lastName && form.email && form.phone.length === 10 && form.password && form.confirmPassword && form.password === form.confirmPassword;

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.mainContainer}>
                {/* LEFT IMAGE */}
                <div className={styles.imageSection} style={{ backgroundImage: `url(${signupIllustration})` }}></div>
                {/* RIGHT FORM */}
                <div className={styles.formSection}>
                    {/* <img src={nitishLogo} alt="Nitish Academy" width="120" /> */}
                    <p className={styles.registerHeading}>Create your account</p>
                    <p className={styles.subtitle}>Let’s get you all set up so you can access your personal account.</p>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>First Name</label>
                                <input type="text" placeholder="Enter first name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })}/>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Last Name</label>
                                <input type="text" placeholder="Enter last name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })}/>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Email</label>
                                <input type="email" placeholder="Enter your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Phone Number</label>
                                <input type="text" placeholder="Enter phone number" value={form.phone} maxLength={10} onChange={(e) => {const value = e.target.value.replace(/\D/g, ""); setForm({ ...form, phone: value });}}/>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Password</label>
                            <input type="password" placeholder="Enter password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}/>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Confirm Password</label>
                            <input type="password" placeholder="Confirm password" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}/>
                        </div>
                        <button type="submit" className={styles.primaryBtn} disabled={!isFormValid}>Create account</button>
                    </form>
                    <p className={styles.loginText}>Already have an account?{" "}<Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};
export default Signup;

