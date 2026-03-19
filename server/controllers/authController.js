import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req,res)=>{
	try {
		const {firstName,lastName,email,phone,password} = req.body;
		const hashedPassword = await bcrypt.hash(password,10);
		const sql = `INSERT INTO users(first_name, last_name, email, phone, password, role) VALUES(?,?,?,?,?,'admin')`;
		const result = await db.query(sql,[firstName, lastName, email, phone, hashedPassword]);
		const token = jwt.sign({ id: result[0].insertId, role: "admin" }, "secretkey", { expiresIn: "1d" });
		res.json({message: "Signup success", token, role: "admin",});
	} catch (err) {
		console.log("Signup Error:", err);
		if (err.code === "ER_DUP_ENTRY") {
			return res.status(400).json({ message: "Email already exists ❌" });
		}
		res.status(500).json({message:"Signup failed"});
	}
};

export const login = async (req, res) => {
	try {
    	const { email, password } = req.body;
	    const result = await db.query("SELECT * FROM users WHERE email=?", [email]);
	    const user = result[0][0];
	    if (!user) {
			return res.status(400).json({ message: "User not found" });
		}
    	const match = await bcrypt.compare(password, user.password);
	    if (!match) {
			return res.status(400).json({ message: "Wrong password" });
		}
	    const token = jwt.sign({ id: user.id, role: user.role }, "secretkey", { expiresIn: "1d" });
	    res.json({message: "Login successful", token, role: user.role,});
    } catch (err) {
	    console.log("Login Error:", err);
	    res.status(500).json({ message: "Login failed" });
  }
};