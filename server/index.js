const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

const bcrypt = require("bcrypt");

app.post("/signup", (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  if (!firstName || !lastName || !email || !phone || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const checkUserQuery = "SELECT * FROM users WHERE email = ?";

  db.query(checkUserQuery, [email], async (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Database error",
      });
    }

    if (result.length > 0) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    const insertQuery = `
      INSERT INTO users 
      (first_name, last_name, email, phone, password, role) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
      insertQuery,
      [firstName, lastName, email, phone, hashedPassword, "student"],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Signup failed",
          });
        }

        res.json({
          message: "Signup Successful ✅",
        });
      },
    );
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and Password required",
    });
  }

  const loginQuery = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(loginQuery, [email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Database error",
      });
    }

    if (result.length === 0) {
      return res.status(400).json({
        message: "Invalid Credentials ❌",
      });
    }

    const user = result[0];

    res.json({
      message: "Login Successful 🚀",
      role: user.role,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  });
});

// =====================================
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
