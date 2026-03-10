const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
    const { firstName, lastName, email, phone, password } = req.body;

    if (!firstName || !lastName || !email || !phone || !password) {
        return res.status(400).json({ message: "All fields required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        await db.query(`INSERT INTO users (first_name, last_name, email, phone, password, role) VALUES (?, ?, ?, ?, ?, ?)`, [firstName, lastName, email, phone, hashedPassword, "admin"],);

        res.status(201).json({ message: "Admin Registered Successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Signup Failed" });
    }
});
module.exports = router;
