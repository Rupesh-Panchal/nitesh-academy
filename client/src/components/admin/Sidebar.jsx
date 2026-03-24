import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const AdminSidebar = () => {
    return (
        <div className={styles.adminSidebar}>
            <h2 className={styles.logo}>Admin Menu's</h2>
            <nav>
                <NavLink  to="/admin/dashboard" className={({ isActive }) => isActive ? styles.active : ""}>Dashboard</NavLink >
                <NavLink  to="/admin/add-achiever" className={({ isActive }) => isActive ? styles.active : ""}>Achievers</NavLink >
                <NavLink  to="/admin/features" className={({ isActive }) => isActive ? styles.active : ""}>Features</NavLink >
            </nav>
        </div>
    );
};

export default AdminSidebar;