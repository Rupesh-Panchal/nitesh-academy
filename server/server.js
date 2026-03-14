// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// import authRoutes from "./routes/auth.routes.js";
// import adminRoutes from "./routes/admin.routes.js";
// import achieverRoutes from "./routes/achiever.routes.js";
// import featureRoutes from "./routes/feature.routes.js";



// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// /* STATIC FOLDER FOR IMAGES */

// app.use("/uploads", express.static("uploads"));

// /* ROUTES */

// app.use("/", authRoutes);              // login
// app.use("/api/admin", adminRoutes);   // admin signup
// app.use("/api/achievers", achieverRoutes); // achievers CRUD
// app.use("/api/features", featureRoutes);  //fetures section crud

// app.get("/", (req, res) => {
//   res.send("Nitish Academy API Running 🚀");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// import authRoutes from "./routes/auth.routes.js";
// import adminRoutes from "./routes/admin.routes.js";
// import achieverRoutes from "./routes/achiever.routes.js";
// import featureRoutes from "./routes/feature.routes.js";

// dotenv.config();

// const app = express();

// /* MIDDLEWARE */

// app.use(cors());
// app.use(express.json());

// /* STATIC FOLDER FOR IMAGES */

// app.use("/uploads", express.static("uploads"));

// /* API ROUTES */

// app.use("/", authRoutes);        // login
// app.use("/api/admin", adminRoutes);      // admin signup
// app.use("/api/achievers", achieverRoutes); // achievers CRUD
// app.use("/api/features", featureRoutes);   // features CRUD

// /* TEST ROUTE */

// app.get("/", (req, res) => {
//   res.send("Nitish Academy API Running 🚀");
// });

// /* SERVER */

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import achieverRoutes from "./routes/achiever.routes.js";
import featureRoutes from "./routes/feature.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

/* ROUTES */

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/achievers", achieverRoutes);
app.use("/api/features", featureRoutes);

app.get("/", (req, res) => {
  res.send("Nitish Academy API Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});