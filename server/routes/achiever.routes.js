import express from "express";
import multer from "multer";
import {addAchiever, getAchievers, deleteAchiever, editAchiever, reorderAchievers} from "../controllers/achiever.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

router.post("/add", upload.single("image"), addAchiever);
router.post("/edit", upload.single("image"), editAchiever);
router.get("/", getAchievers);
router.delete("/:id", deleteAchiever);
router.post("/reorder", reorderAchievers);

export default router;