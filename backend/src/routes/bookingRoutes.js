const express = require("express");
const {
  createBooking,
  getMyBookings,
  getSalonBookings,
  completeBooking,
  cancelBooking,
  rescheduleBooking,
} = require("../controllers/bookingController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createBooking);
router.get("/my", protect, getMyBookings);
router.put("/:id/cancel", protect, cancelBooking);
router.put("/:id/reschedule", protect, rescheduleBooking);
router.get("/salon", protect, getSalonBookings);
router.put("/:id/complete", protect, completeBooking);



module.exports = router;

