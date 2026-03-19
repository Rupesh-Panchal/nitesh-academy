import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/admin/Sidebar";
import AdminNavbar from "../../components/admin/Navbar";
import styles from "./AddAchiever.module.css";

const EMPTY_FORM = {id: null, name: "", score: "", board: "", section: "", rank_text: "", image: null,};
const Achievers = () => {
    const [achievers, setAchievers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [form, setForm] = useState(EMPTY_FORM);

    const loadAchievers = async () => {
        const res = await axios.get("http://localhost:5000/api/achievers");
        setAchievers(res.data);
    };

    useEffect(() => {
        loadAchievers();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImage = (e) => {
        setForm({ ...form, image: e.target.files[0] });
    };

    const handleSave = async () => {
        const data = new FormData();
        Object.keys(form).forEach((key) => {
            if (form[key]) data.append(key, form[key]);
        });
        try {
            if (editMode) {await axios.put(`http://localhost:5000/api/achievers/update/${form.id}`, data);
            } else {
                await axios.post("http://localhost:5000/api/achievers/add", data);
            }
            setShowForm(false);
            setEditMode(false);
            setForm(EMPTY_FORM);
            loadAchievers();
        } catch (err) {
            console.log(err);
        }
    };

    const handleEdit = (item) => {
        setForm({ ...item, image: null });
        setEditMode(true);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this achiever?")) return;
        await axios.delete(`http://localhost:5000/api/achievers/delete/${id}`);
        loadAchievers();
    };

    return (
        <div className={styles.pageLayout}>
            <AdminNavbar />
            <div className={styles.pageBody}>
                <Sidebar />
                <div className={styles.mainContent}>
                    <div className={styles.header}>
                        <h2>Achievers</h2>
                        {!showForm && (
                            <button onClick={() => {setShowForm(true); setEditMode(false);}} className={styles.addBtn}>+ Add Achiever</button>
                        )}
                    </div>
                    {/* TABLE */}
                    {!showForm && (
                        <div className={styles.tableContainer}>
                            <table>
                                <thead>
                                    <tr>
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
                                            <td>{item.name}</td>
                                            <td>{item.score}</td>
                                            <td>{item.board}</td>
                                            <td>{item.section}</td>
                                            <td>{item.rank_text}</td>
                                            <td><img src={item.image} className={styles.img} alt=""/></td>
                                            <td>
                                                <button onClick={() => handleEdit(item)} className={styles.editBtn}>Edit</button>
                                                <button onClick={() => handleDelete(item.id)} className={styles.deleteBtn}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* FORM */}
                    {showForm && (
                        <div className={styles.formContainer}>
                            <h3>{editMode ? "Edit Achiever" : "Add Achiever"}</h3>
                            <div className={styles.form}>
                                <div className={styles.row}>
                                    <div className={styles.formGroup}>
                                        <label>Name</label>
                                        <input name="name" placeholder="Enter name" value={form.name} onChange={handleChange}/>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Score</label>
                                        <input name="score" placeholder="Enter score" value={form.score} onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.formGroup}>
                                        <label>Board</label>
                                        <input name="board" placeholder="Enter board" value={form.board} onChange={handleChange}/>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Section</label>
                                        <input name="section" placeholder="Enter section" value={form.section} onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.formGroup}>
                                        <label>Rank</label>
                                        <input name="rank_text" placeholder="Enter rank" value={form.rank_text} onChange={handleChange}/>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Upload Image</label>
                                        <input type="file" onChange={handleImage}/>
                                    </div>
                                </div>
                                <div className={styles.formActions}>
                                    <button onClick={handleSave} className={styles.saveBtn}>Save</button>
                                    <button onClick={() => setShowForm(false)} className={styles.cancelBtn}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Achievers;