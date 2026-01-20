const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");

// Routes
const authRoutes = require("./src/routes/authRoutes");
const serviceRoutes = require("./src/routes/serviceRoutes");
const salonRoutes = require("./src/routes/salonRoutes");
const profileRoutes = require("./src/routes/profileRoutes");

dotenv.config();
connectDB();

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/salon", salonRoutes);
app.use("/api/profile", profileRoutes);


/* BASE ROUTE */
app.get("/", (req, res) => {
  res.send("Salon API running...");
});

/* GLOBAL ERROR HANDLER */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Server Error",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
