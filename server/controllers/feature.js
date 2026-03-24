import db from "../config/db.js";
import { uploadFile } from "../utils/upload.js";

export const addFeature = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!req.file) {
            return res.status(400).json({ message: "Icon is required" });
        }
        const icon = await uploadFile(req.file.path, "admin/features/icons");
        await db.query("INSERT INTO features(title,description,icon) VALUES(?,?,?)", [title, description, icon]);
        res.json({ message: "Feature added successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

export const getFeatures = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM features ORDER BY display_order ASC");
        res.json(rows);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const editFeature = async (req, res) => {
    try {
        const { id, title, description } = req.body;
        let icon = null;
        if (req.file) {
            icon = await uploadFile(req.file.path, "admin/features/icons");
        }
        if (icon) {
            await db.query("UPDATE features SET title=?, description=?, icon=? WHERE id=?", [title, description, icon, id]);
        } else {
            await db.query("UPDATE features SET title=?, description=? WHERE id=?", [title, description, id]);
        }
        res.json({ message: "Feature updated successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

export const deleteFeature = async (req, res) => {
    try {
        await db.query("DELETE FROM features WHERE id=?", [req.params.id]);
        res.json({ message: "Feature deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
};