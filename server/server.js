// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Nitesh Academy API Running 🚀");
// });

// app.use("/api/admin", require("./routes/admin.routes"));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });



// import express from "express";
// import cors from "cors";
// import authRoutes from "./routes/authRoutes.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/", authRoutes);

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });



import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth",authRoutes);
app.use("/admin",adminRoutes);

app.listen(5000,()=>{
console.log("Server running on port 5000");
});