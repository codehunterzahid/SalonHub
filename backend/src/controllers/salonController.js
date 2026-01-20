const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");

// Get settings for logged-in salon owner
exports.getSalonSettings = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select(
    "salonName name email location bankAccount"
  );

  if (!user) {
    return res.status(404).json({ message: "Salon not found" });
  }

  res.status(200).json(user);
});

// Update settings for logged-in salon owner
exports.updateSalonSettings = asyncHandler(async (req, res) => {
  const { salonName, location, bankAccount, name } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    { salonName, location, bankAccount, name },
    { new: true, runValidators: true, select: "salonName name email location bankAccount" }
  );

  if (!updatedUser) {
    return res.status(404).json({ message: "Salon not found" });
  }

  res.status(200).json(updatedUser);
});
