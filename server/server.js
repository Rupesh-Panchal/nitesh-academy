const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const User = require("./models/User");

const app = express();

/* -------------------- Middlewares -------------------- */
app.use(cors());
app.use(express.json());

/* -------------------- Database Connection -------------------- */
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("✅ MongoDB Connected");
	} catch (error) {
		console.error("❌ MongoDB Connection Failed:", error.message);
		process.exit(1); // Stop server if DB fails
	}
};
connectDB();

/* -------------------- Routes -------------------- */
app.get("/", (req, res) => {
	res.send("Nitesh Academy API Running 🚀");
});

app.post("/signup", async (req, res) => {
	try {
		const { name, email, password, role } = req.body;

		// Basic validation
		if (!name || !email || !password || !role) {
			return res.status(400).json({
				message: "All fields are required",
			});
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({
				message: "User already exists",
			});
		}

		const user = await User.create({
			name,
			email,
			password,
			role,
		});

		res.status(201).json({
			message: "User created successfully",
			user,
		});
	} catch (error) {
		console.error("Signup Error:", error.message);
		res.status(500).json({
			message: "Server Error",
		});
	}
});

/* -------------------- Start Server -------------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`);
});
