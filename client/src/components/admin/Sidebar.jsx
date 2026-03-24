import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const AdminSidebar = () => {
    return (
        <div className={styles.adminSidebar}>
            <h2 className={styles.logo}>Admin Menu</h2>
            <nav>
                <Link to="/admin/dashboard">Dashboard</Link>
                <Link to="/admin/add-achiever">Achievers</Link>
                <Link to="/admin/features">Features</Link>
            </nav>
        </div>
    );
};

export default AdminSidebar;