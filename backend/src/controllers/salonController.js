const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");
const Salon = require("../models/Salon");
const Service = require("../models/Service");

// GET /api/salons
exports.getSalons = asyncHandler(async (req, res) => {
  const salons = await User.find({ role: "salonOwner" }).lean();

  const salonsWithServices = await Promise.all(
    salons.map(async (salon) => {
      const services = await Service.find({ salonId: salon._id });
      return {
        ...salon,
        services,
        image:
          salon.image ||
          "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb258ZW58MHx8MHx8fDA%3D", // default image
      };
    }),
  );

  res.status(200).json(salonsWithServices);
});



// Get settings for logged-in salon owner
exports.getSalonSettings = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select(
    "salonName fullName email location bankAccount",
  );

  if (!user) {
    return res.status(404).json({ message: "Salon not found" });
  }

  res.status(200).json(user);
});

// Update settings for logged-in salon owner
exports.updateSalonSettings = asyncHandler(async (req, res) => {
  const { salonName, location, bankAccount, fullName } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    { salonName, location, bankAccount, fullName },
    {
      new: true,
      runValidators: true,
      select: "salonName fullName email location bankAccount",
    },
  );

  if (!updatedUser) {
    return res.status(404).json({ message: "Salon not found" });
  }

  res.status(200).json(updatedUser);
});
