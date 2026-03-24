import express from "express";
import multer from "multer";
import {addFeature, getFeatures, editFeature, deleteFeature} from "../controllers/feature.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/add", upload.single("icon"), addFeature);
router.post("/edit", upload.single("icon"), editFeature);
router.get("/", getFeatures);
router.delete("/:id", deleteFeature);

export default router;