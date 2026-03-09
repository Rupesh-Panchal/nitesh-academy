// import db from "../db.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";


// // SIGNUP
// export const signup = async (req, res) => {

//   const { firstName, lastName, email, phone, password } = req.body;

//   if (!firstName || !lastName || !email || !phone || !password) {
//     return res.status(400).json({ message: "All fields required" });
//   }

//   try {

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const sql = `
//       INSERT INTO users (first_name, last_name, email, phone, password)
//       VALUES (?, ?, ?, ?, ?)
//     `;

//     db.query(sql,
//       [firstName, lastName, email, phone, hashedPassword],
//       (err, result) => {

//         if (err) {
//           return res.status(500).json({ message: "User already exists" });
//         }

//         res.json({ message: "Signup successful ✅" });

//       });

//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }

// };


// // LOGIN
// export const login = (req, res) => {

//   const { email, password } = req.body;

//   const sql = "SELECT * FROM users WHERE email = ?";

//   db.query(sql, [email], async (err, result) => {

//     if (err) {
//       return res.status(500).json({ message: "Server error" });
//     }

//     if (result.length === 0) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     const user = result[0];

//     const match = await bcrypt.compare(password, user.password);

//     if (!match) {
//       return res.status(400).json({ message: "Wrong password" });
//     }

//     const token = jwt.sign(
//       { id: user.id },
//       "secretkey",
//       { expiresIn: "1d" }
//     );

//     res.json({
//       message: "Login successful",
//       token
//     });

//   });

// };



import db from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req,res)=>{

const {firstName,lastName,email,phone,password} = req.body;

const hashedPassword = await bcrypt.hash(password,10);

const sql = `
INSERT INTO users(first_name,last_name,email,phone,password,role)
VALUES(?,?,?,?,?,'student')
`;

db.query(sql,[firstName,lastName,email,phone,hashedPassword],(err)=>{

if(err){
return res.status(500).json({message:"Signup failed"});
}

res.json({message:"Signup success"});

});

};


export const login = (req,res)=>{

const {email,password} = req.body;

db.query("SELECT * FROM users WHERE email=?",[email],
async (err,result)=>{

if(result.length === 0){
return res.status(400).json({message:"User not found"});
}

const user = result[0];

const match = await bcrypt.compare(password,user.password);

if(!match){
return res.status(400).json({message:"Wrong password"});
}

const token = jwt.sign(
{id:user.id,role:user.role},
"secretkey",
{expiresIn:"1d"}
);

res.json({
token,
user
});

});

};