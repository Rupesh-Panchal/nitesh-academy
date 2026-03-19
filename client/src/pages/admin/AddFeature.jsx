import { useState } from "react";
import axios from "axios";
import Sidebar from "../../components/admin/Sidebar";
import AdminNavbar from "../../components/admin/Navbar";
import styles from "./AddFeature.module.css";

const AddFeature = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [icon, setIcon] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("title", title);
        data.append("description", description);
        data.append("icon", icon);
        try {
            await axios.post("http://localhost:5000/api/features/add", data);
            alert("Feature Added");
            setTitle("");
            setDescription("");
            setIcon(null);
        } catch (err) {
            console.log(err);
            alert("Error");
        }
    };
    return (
        <div className={styles.pageLayout}>
            <AdminNavbar />
            <div className={styles.pageBody}>
                <Sidebar />
                <div className={styles.mainContent}>
                    <h2 className={styles.heading}>Add Feature</h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input type="text" placeholder="Feature Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                        <textarea placeholder="Feature Description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                        <input type="file" accept="image/*" onChange={(e) => setIcon(e.target.files[0])} required/>
                        <button type="submit">Add Feature</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFeature;