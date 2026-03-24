import styles from "./Navbar.module.css";
import nitishLogo from "../../assets/nitishLogo.png";

const AdminNavbar = () => {
    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/login";
    };
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <img src={nitishLogo} alt="logo" className={styles.logo} />
                <span className={styles.title}>NITISH ACADEMY</span>
            </div>
            <div className={styles.right}>
                <span className={styles.welcome}>Welcome, {user?.first_name || "Admin"}</span>
                <button onClick={handleLogout} className={styles.logout}>Logout</button>
            </div>
        </div>
    );
};

export default AdminNavbar;