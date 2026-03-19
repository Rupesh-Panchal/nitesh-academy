import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/admin/Sidebar";
import AdminNavbar from "../../components/admin/Navbar";
import styles from "./ManageAchievers.module.css";

const ManageAchievers = () => {
    const [achievers, setAchievers] = useState([]);

    const fetchAchievers = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/achievers");
            setAchievers(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAchievers();
    }, []);

    const deleteAchiever = async (id) => {
        if (!window.confirm("Delete this achiever?")) return;

        try {
            await axios.delete(
                `http://localhost:5000/api/achievers/delete/${id}`
            );
            alert("Achiever Deleted");
            fetchAchievers();
        } catch (error) {
            alert("Delete failed");
        }
    };

    return (
        <div className={styles.pageLayout}>
            <AdminNavbar />

            <div className={styles.pageBody}>
                <Sidebar />

                <div className={styles.mainContent}>
                    <h2 className={styles.heading}>Manage Achievers</h2>

                    <div className={styles.tableContainer}>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Score</th>
                                    <th>Board</th>
                                    <th>Section</th>
                                    <th>Rank</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {achievers.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.score}</td>
                                        <td>{item.board}</td>
                                        <td>{item.section}</td>
                                        <td>{item.rank_text}</td>
                                        <td>
                                            <img
                                                src={item.image}
                                                alt=""
                                                className={styles.tableImg}
                                            />
                                        </td>
                                        <td>
                                            <button
                                                className={styles.deleteBtn}
                                                onClick={() =>
                                                    deleteAchiever(item.id)
                                                }
                                            >
                                                Delete
                                            </button>
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

export default ManageAchievers;