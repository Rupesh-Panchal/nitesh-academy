const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


// =====================================
// TEST ROUTE
// =====================================
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});


// =====================================
// SIGNUP ROUTE
// =====================================
app.post("/signup", (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const checkUserQuery =
    "SELECT * FROM users WHERE email = ?";

  db.query(checkUserQuery, [email], (err, result) => {
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

    const insertQuery =
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";

    db.query(
      insertQuery,
      [name, email, password, role],
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
      }
    );
  });
});


// =====================================
// LOGIN ROUTE (ROLE BASED)
// =====================================
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and Password required",
    });
  }

  const loginQuery =
    "SELECT * FROM users WHERE email = ? AND password = ?";

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