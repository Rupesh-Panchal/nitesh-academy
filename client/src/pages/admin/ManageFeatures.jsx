import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/admin/Sidebar";
import AdminNavbar from "../../components/admin/Navbar";
import styles from "./ManageFeatures.module.css";

const ManageFeatures = () => {
    const [features, setFeatures] = useState([]);
    const fetchFeatures = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/features");
            setFeatures(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchFeatures();
    }, []);
    const deleteFeature = async (id) => {
        if (!window.confirm("Delete this feature?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/features/${id}`);
            fetchFeatures();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className={styles.pageLayout}>
            <AdminNavbar />
            <div className={styles.pageBody}>
                <Sidebar />
                <div className={styles.mainContent}>
                    <h2 className={styles.heading}>Manage Features</h2>
                    <div className={styles.tableContainer}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Icon</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <img src={`http://localhost:5000/uploads/icons/${item.icon}`} alt="" className={styles.tableImg}/>
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <button className={styles.deleteBtn} onClick={() => deleteFeature(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageFeatures;