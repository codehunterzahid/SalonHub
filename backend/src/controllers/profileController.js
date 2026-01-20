const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/User");

exports.getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

exports.updateProfile = asyncHandler(async (req, res) => {
  const { fullName, email } = req.body;

  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  user.fullName = fullName || user.fullName;
  user.email = email || user.email;

  const updatedUser = await user.save();

  res.status(200).json({
    _id: updatedUser._id,
    fullName: updatedUser.fullName,
    email: updatedUser.email,
    role: updatedUser.role,
  });
});
