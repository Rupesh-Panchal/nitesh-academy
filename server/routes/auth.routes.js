const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");

// STUDENT SIGNUP
router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  if (!firstName || !lastName || !email || !phone || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const [existingUser] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.promise().query(
      `INSERT INTO users 
       (first_name, last_name, email, phone, password, role) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [firstName, lastName, email, phone, hashedPassword, "student"],
    );

    res.status(201).json({ message: "Signup Successful ✅" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Signup failed" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password required" });
  }

  try {
    const [users] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);

    if (users.length === 0) {
      return res.status(400).json({ message: "Invalid Credentials ❌" });
    }

    const user = users[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials ❌" });
    }

    res.json({
      message: "Login Successful 🚀",
      role: user.role,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;
