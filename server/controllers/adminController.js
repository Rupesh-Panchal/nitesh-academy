// // import db from "../db.js";
// import db from "../config/db.js";

// export const getStats = (req,res)=>{

// const query = `
// SELECT
// COUNT(*) AS totalUsers,
// SUM(role='student') AS totalStudents,
// SUM(role='admin') AS totalAdmins
// FROM users
// `;

// db.query(query,(err,result)=>{
// res.json(result[0]);
// });

// };


// export const getUsers = (req,res)=>{

// db.query("SELECT id,first_name,last_name,email,phone,role FROM users",
// (err,result)=>{

// res.json(result);

// });

// };


// export const deleteUser = (req,res)=>{

// const {id} = req.params;

// db.query("DELETE FROM users WHERE id=?",[id],
// (err)=>{

// res.json({message:"User deleted"});

// });

// };






import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/* ======================
   SIGNUP
====================== */

export const signup = async (req, res) => {

  const { firstName, lastName, email, phone, password } = req.body;

  try {

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `
    INSERT INTO users(first_name,last_name,email,phone,password,role)
    VALUES(?,?,?,?,?,'student')
    `;

    db.query(
      sql,
      [firstName, lastName, email, phone, hashedPassword],
      (err) => {

        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Signup failed ❌" });
        }

        res.json({ message: "Signup success ✅" });

      }
    );

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error ❌" });
  }

};


/* ======================
   LOGIN
====================== */

export const login = (req, res) => {

  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error ❌" });
      }

      if (!result || result.length === 0) {
        return res.status(400).json({ message: "User not found ❌" });
      }

      const user = result[0];

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(400).json({ message: "Wrong password ❌" });
      }

      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      res.json({
        message: "Login successful ✅",
        token,
        role: user.role,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name
        }
      });

    }
  );

};