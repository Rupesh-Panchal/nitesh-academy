import db from "../config/db.js";
import { uploadFile } from "../utils/upload.js";

export const addAchiever = async (req, res) => {
    try {
        const { name, score, board, section, rank_text } = req.body;
        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }
        const image = await uploadFile(req.file.path, "admin/achiever/images");
        await db.query("INSERT INTO achievers(name,score,board,section,rank_text,image) VALUES (?,?,?,?,?,?)", [name, score, board, section, rank_text, image]);
        res.json({ message: "Achiever added successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
};

export const getAchievers = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM achievers ORDER BY display_order ASC");
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

export const deleteAchiever = async (req, res) => {
    try {
        await db.query("DELETE FROM achievers WHERE id=?", [req.params.id]);
        res.json({ message: "Deleted Successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

export const editAchiever = async (req, res) => {
    try {
        const { id, name, score, board, section, rank_text } = req.body;
        let image = null;
        if (req.file) {
            image = await uploadFile(req.file.path, "admin/achiever/images");
        }
        if (image) {
            await db.query("UPDATE achievers SET name=?, score=?, board=?, section=?, rank_text=?, image=? WHERE id=?", [name, score, board, section, rank_text, image, id]);
        } else {
            await db.query("UPDATE achievers SET name=?, score=?, board=?, section=?, rank_text=? WHERE id=?", [name, score, board, section, rank_text, id]);
        }
        res.json({ message: "Achiever updated successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
};

export const reorderAchievers = async (req, res) => {
    const { list } = req.body;
    try {
        for (let i = 0; i < list.length; i++) {
            await db.query(
                "UPDATE achievers SET display_order=? WHERE id=?",
                [i, list[i]]
            );
        }
        res.json({ message: "Order Updated" });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};