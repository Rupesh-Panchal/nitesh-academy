import styles from "./Footer.module.css";

const AdminFooter = () => {
    return (
        <div className={styles.footer}>
            <p>© {new Date().getFullYear()} Nitish Academy | All Rights Reserved</p>
        </div>
    );
};

export default AdminFooter;