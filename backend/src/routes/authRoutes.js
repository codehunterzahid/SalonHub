const express = require("express");
const { protect, authorize } = require("../middleware/authMiddleware");
const {
  signup,
  login,
  userDashboard,
  salonDashboard,
  adminDashboard,
} = require("../controllers/authController");

const router = express.Router();

router.get("/me", protect, (req, res) => {
  res.json({ user: req.user });
});

// ================= SIGNUP =================
router.post("/signup", signup);

// ================= LOGIN =================
router.post("/login", login);

// ================= DASHBOARDS =================
router.get("/user", protect, authorize("customer"), userDashboard);
router.get("/salon", protect, authorize("salonOwner"), salonDashboard);
router.get("/admin", protect, authorize("admin"), adminDashboard);

module.exports = router;
