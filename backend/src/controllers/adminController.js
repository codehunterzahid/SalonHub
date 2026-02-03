const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/User");

/* ==============================
   GET ALL SALONS
   ============================== */
const getAllSalons = asyncHandler(async (req, res) => {
  const salons = await User.find({ role: "salonOwner" })
    .select("-password")
    .sort({ createdAt: -1 });

  res.status(200).json(salons);
});

/* ==============================
   REMOVE SALON (PERMANENT)
   ============================== */
const removeSalon = asyncHandler(async (req, res) => {
  const salon = await User.findOne({
    _id: req.params.id,
    role: "salonOwner",
  });

  if (!salon) {
    res.status(404);
    throw new Error("Salon not found");
  }

  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    message: "Salon removed successfully",
    id: req.params.id,
  });
});

/* ==============================
   TOGGLE SALON STATUS
   ============================== */
const toggleSalonStatus = asyncHandler(async (req, res) => {
  const salon = await User.findOne({
    _id: req.params.id,
    role: "salonOwner",
  });

  if (!salon) {
    res.status(404);
    throw new Error("Salon not found");
  }

  salon.status = salon.status === "active" ? "freeze" : "active";

  await salon.save(); 
  
  res.status(200).json({
    id: salon._id,
    status: salon.status,
  });
});

module.exports = {
  getAllSalons,
  removeSalon,
  toggleSalonStatus,
};
