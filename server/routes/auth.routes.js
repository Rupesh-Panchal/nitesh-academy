import express from "express";
import bcrypt from "bcrypt";
import db from "../config/db.js";

const router = express.Router();

/* LOGIN */

router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and Password required"
    });
  }

  try {

    const [users] = await db.query(
      "SELECT * FROM users WHERE email=?",
      [email]
    );

    if (users.length === 0) {
      return res.status(400).json({
        message: "Invalid Credentials ❌"
      });
    }

    const user = users[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentials ❌"
      });
    }

    res.json({
      message: "Login Successful 🚀",
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name
      }
    });

  } catch (error) {

    console.log(error);
    res.status(500).json({
      message: "Login Failed ❌"
    });

  }

});

export default router;