import { useEffect, useState } from "react";
import {getFeaturesAPI, addFeatureAPI, editFeatureAPI, deleteFeatureAPI} from "../../api/api";
import Sidebar from "../../components/admin/Sidebar";
import AdminNavbar from "../../components/admin/Navbar";
import styles from "./Feature.module.css"; // reuse same CSS

const EMPTY_FORM = {id: null, title: "", description: "", icon: null};

const Features = () => {
    const [features, setFeatures] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [form, setForm] = useState(EMPTY_FORM);

    const loadFeatures = async () => {
        const res = await getFeaturesAPI();
        setFeatures(res.data);
    };

    useEffect(() => {
        loadFeatures();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImage = (e) => {
        setForm({ ...form, icon: e.target.files[0] });
    };

    const handleSave = async () => {
        const data = new FormData();
        if (editMode) {
            data.append("id", form.id);
        }
        data.append("title", form.title);
        data.append("description", form.description);
        if (form.icon) {
            data.append("icon", form.icon);
        }
        try {
            if (editMode) {
                await editFeatureAPI(data);
            } else {
                await addFeatureAPI(data);
            }
            setShowForm(false);
            setEditMode(false);
            setForm(EMPTY_FORM);
            loadFeatures();
        } catch (err) {
            console.log(err);
        }
    };

    const handleEdit = (item) => {
        setForm({ ...item, icon: null });
        setEditMode(true);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this feature?")) return;
        await deleteFeatureAPI(id);
        loadFeatures();
    };

    const isFormValid =
        form.title.trim() &&
        form.description.trim() &&
        (!editMode ? form.icon : true);

    return (
        <div className={styles.pageLayout}>
            <AdminNavbar />
            <div className={styles.pageBody}>
                <Sidebar />

                <div className={styles.mainContent}>
                    <div className={styles.header}>
                        <h2>Features</h2>

                        {!showForm && (
                            <button
                                onClick={() => {
                                    setShowForm(true);
                                    setEditMode(false);
                                    setForm(EMPTY_FORM);
                                }}
                                className={styles.addBtn}
                            >
                                + Add Feature
                            </button>
                        )}
                    </div>

                    {/* TABLE */}
                    {!showForm && (
                        <div className={styles.tableContainer}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {features.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>

                                            <td>
                                                <button
                                                    onClick={() => handleEdit(item)}
                                                    className={styles.editBtn}
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className={styles.deleteBtn}
                                                >
                                                    Delete
                                                </button>
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
                            <h3>
                                {editMode ? "Edit Feature" : "Add Feature"}
                            </h3>

                            <div className={styles.form}>
                                <div className={styles.row}>
                                    <div className={styles.formGroup}>
                                        <label>Title</label>
                                        <input
                                            name="title"
                                            placeholder="Enter title"
                                            value={form.title}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.formGroup}>
                                        <label>Description</label>
                                        <input
                                            name="description"
                                            placeholder="Enter description"
                                            value={form.description}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.formGroup}>
                                        <label>Upload Icon</label>
                                        <input
                                            type="file"
                                            onChange={handleImage}
                                        />
                                    </div>
                                </div>

                                <div className={styles.formActions}>
                                    <button
                                        onClick={handleSave}
                                        className={styles.saveBtn}
                                        disabled={!isFormValid}
                                    >
                                        Save
                                    </button>

                                    <button
                                        onClick={() => setShowForm(false)}
                                        className={styles.cancelBtn}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Features;