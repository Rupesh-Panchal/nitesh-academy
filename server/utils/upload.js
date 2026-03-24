import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const uploadFile = async (filePath, path) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: `uploads/${path}`, // 🔥 base + dynamic path
            resource_type: "auto",
            public_id: Date.now().toString()
        });
        fs.unlinkSync(filePath);
        return result.secure_url;
    } catch (err) {
        console.log("Cloudinary Upload Error:", err);
        throw err;
    }
};