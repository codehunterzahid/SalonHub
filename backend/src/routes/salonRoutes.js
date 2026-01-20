const express = require("express");
const { protect, authorize } = require("../middleware/authMiddleware");
const { getSalonSettings, updateSalonSettings } = require("../controllers/salonController");

const router = express.Router();

// Get settings of logged in salon owner
router.get("/", protect, authorize("salonOwner"), getSalonSettings);

// Update settings of logged in salon owner
router.put("/", protect, authorize("salonOwner"), updateSalonSettings);

module.exports = router;
