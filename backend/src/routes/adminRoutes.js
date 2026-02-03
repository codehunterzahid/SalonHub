const express = require("express");
const router = express.Router();
const { getAllSalons, removeSalon, toggleSalonStatus } = require("../controllers/adminController");
const { protect, admin } = require("../middleware/authMiddleware");

router.get("/salons", protect, admin, getAllSalons);
router.delete("/salons/:id", protect, admin, removeSalon);
router.patch("/salons/:id/status", protect, admin, toggleSalonStatus);


module.exports = router;
