// import express from "express";
// import bcrypt from "bcrypt";
// import db from "../config/db.js";

// const router = express.Router();

// /* LOGIN */

// router.post("/login", async (req, res) => {

//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({
//       message: "Email and Password required"
//     });
//   }

//   try {

//     const [users] = await db.query(
//       "SELECT * FROM users WHERE email=?",
//       [email]
//     );

//     if (users.length === 0) {
//       return res.status(400).json({
//         message: "Invalid Credentials ❌"
//       });
//     }

//     const user = users[0];

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({
//         message: "Invalid Credentials ❌"
//       });
//     }

//     res.json({
//       message: "Login Successful 🚀",
//       user: {
//         id: user.id,
//         email: user.email,
//         firstName: user.first_name,
//         lastName: user.last_name
//       }
//     });

//   } catch (error) {

//     console.log(error);
//     res.status(500).json({
//       message: "Login Failed ❌"
//     });

//   }

// });

// export default router;

import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/db.js";

const router = express.Router();

/* LOGIN */

router.post("/admin/login", async (req, res) => {

  console.log("Login route hit");

  const { email, password } = req.body;

  // validate input
  if (!email || !password) {
    return res.status(400).json({
      message: "Email and Password required"
    });
  }

  try {

    // check user
    const [users] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({
        message: "Invalid Email or Password ❌"
      });
    }

    const user = users[0];

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Email or Password ❌"
      });
    }

    // create JWT token
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    // success response
    res.status(200).json({
      message: "Login Successful 🚀",
      token: token,
      role: user.role,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name
      }
    });

  } catch (error) {

    console.error("Login Error:", error);

    res.status(500).json({
      message: "Server Error ❌"
    });

  }

});

export default router;