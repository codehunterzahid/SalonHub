const express = require("express");
const {
  createService,
  getServices,
  deleteService,
  updateService,
} = require("../controllers/serviceController");

const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/",
  protect,
  authorize("admin", "salonOwner"), 
  createService
);

router.put(
  "/:id",
  protect,
  authorize("admin", "salonOwner"),
  updateService
);


router.get("/", protect, getServices);

router.delete(
  "/:id",
  protect,
  authorize("admin", "salonOwner"),
  deleteService
);

module.exports = router;
