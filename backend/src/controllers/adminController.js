const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/User");

// GET /api/admin/salons
const getAllSalons = asyncHandler(async (req, res) => {
  const salons = await User.find({ role: "salonOwner" }).select("-password");
  res.status(200).json(salons);
});

// DELETE /api/admin/salons/:id
const removeSalon = asyncHandler(async (req, res) => {
  const salon = await User.findById(req.params.id);
  if (!salon) {
    res.status(404);
    throw new Error("Salon not found");
  }
  await salon.remove();
  res.status(200).json({ message: "Salon removed successfully" });
});

// PATCH /api/admin/salons/:id/status
const toggleSalonStatus = asyncHandler(async (req, res) => {
  const salon = await User.findById(req.params.id);
  if (!salon) {
    res.status(404);
    throw new Error("Salon not found");
  }

  salon.status = salon.status === "active" ? "freeze" : "active";
  await salon.save();
  res.status(200).json({ status: salon.status });
});

module.exports = {
  getAllSalons,
  removeSalon,
  toggleSalonStatus,
};
