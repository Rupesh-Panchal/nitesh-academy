import express from "express";
import bcrypt from "bcrypt";
import db from "../config/db.js";

const router = express.Router();

/* SIGNUP */

router.post("/signup", async (req, res) => {

  const { firstName, lastName, email, phone, password } = req.body;

  if (!firstName || !lastName || !email || !phone || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {

    const [existingUser] = await db.query(
      "SELECT * FROM users WHERE email=?",
      [email]
    );

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      `INSERT INTO users 
      (first_name,last_name,email,phone,password)
      VALUES(?,?,?,?,?)`,
      [firstName, lastName, email, phone, hashedPassword]
    );

    res.status(201).json({
      message: "Signup Successful ✅"
    });

  } catch (error) {

    console.log(error);
    res.status(500).json({
      message: "Signup Failed ❌"
    });

  }

});

export default router;