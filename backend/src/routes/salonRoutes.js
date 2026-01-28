const express = require("express");
const { protect, authorize } = require("../middleware/authMiddleware");
const { getSalonSettings, updateSalonSettings, getSalons } = require("../controllers/salonController");

const router = express.Router();

module.exports = router;

// Public route: all users can see salons
router.get("/", getSalons);


// Get settings of logged in salon owner
router.get("/", protect, authorize("salonOwner"), getSalonSettings);

// Update settings of logged in salon owner
router.put("/", protect, authorize("salonOwner"), updateSalonSettings);

module.exports = router;
