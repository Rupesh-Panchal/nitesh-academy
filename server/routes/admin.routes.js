const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await db.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, password, "admin"],
    );
    res.status(201).json({ message: "Admin Registered Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Signup Failed" });
  }
});

module.exports = router;
