const express = require("express");
const router = express.Router();
const { getAllSalons, removeSalon, toggleSalonStatus } = require("../controllers/adminController");
const { protect, admin } = require("../middleware/authMiddleware");

// Get all salons
router.get("/salons", protect, admin, getAllSalons);

// Remove a salon permanently
router.delete("/salons/:id", protect, admin, removeSalon);

// Freeze / Unfreeze salon
router.patch("/salons/:id/status", protect, admin, toggleSalonStatus);

module.exports = router;
