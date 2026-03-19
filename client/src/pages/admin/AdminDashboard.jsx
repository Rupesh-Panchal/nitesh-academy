import Sidebar from "../../components/admin/Sidebar";
import AdminNavbar from "../../components/admin/Navbar";
import AdminFooter from "../../components/admin/Footer";
import styles from "./AdminDashboard.module.css";

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="adminLayout">
            <AdminNavbar />
            <div className="adminBody">
                <Sidebar />
                <div className={styles.dashboardMain}>
                    <h2 className={styles.welcomeText}>Dashboard</h2>
                    <div className={styles.statsGrid}>
                        <div className={`${styles.statCard} ${styles.usersCard}`}>
                            <h3>Total Users</h3>
                            <p>120</p>
                        </div>
                        <div className={`${styles.statCard} ${styles.coursesCard}`}>
                            <h3>Total Courses</h3>
                            <p>8</p>
                        </div>
                        <div className={`${styles.statCard} ${styles.enrollCard}`}>
                            <h3>Enrollments</h3>
                            <p>320</p>
                        </div>
                        <div className={`${styles.statCard} ${styles.revenueCard}`}>
                            <h3>Revenue</h3>
                            <p>₹45,000</p>
                        </div>
                    </div>
                    <div className={styles.tableSection}>
                        <div className={styles.tableHeader}>
                            <h2>Recent Users</h2>
                            <button className={styles.viewAllBtn}>View All</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Vivek Gupta</td>
                                    <td>vivek@email.com</td>
                                    <td>9876543210</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;