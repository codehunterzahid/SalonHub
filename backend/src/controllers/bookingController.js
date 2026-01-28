const mongoose = require("mongoose");
const asyncHandler = require("../utils/asyncHandler");
const Booking = require("../models/Booking");
const Service = require("../models/Service");

// booking creation
exports.createBooking = asyncHandler(async (req, res) => {
  const { serviceId, date, time, paymentMethod } = req.body;

  if (!serviceId || !date || !time || !paymentMethod) {
    res.status(400);
    throw new Error("All fields are required");
  }

  if (!mongoose.Types.ObjectId.isValid(serviceId)) {
    res.status(400);
    throw new Error("Invalid service ID");
  }

  const service = await Service.findById(serviceId);

  if (!service) {
    res.status(404);
    throw new Error("Service not found");
  }

  const salonId = service.salonId;

  const existingBooking = await Booking.findOne({
    userId: req.user._id,
    salonId,
    date,
    time,
    status: { $ne: "Cancelled" },
  });

  if (existingBooking) {
    res.status(400);
    throw new Error(
      "You already have a booking at this salon at this time"
    );
  }

  const booking = await Booking.create({
    userId: req.user._id,
    salonId,
    serviceId,
    serviceName: service.name,
    servicePrice: service.price,
    serviceDuration: service.duration,
    date,
    time,
    paymentMethod,
  });

  res.status(201).json({
    success: true,
    message: "Booking created successfully",
    booking,
  });
});

// GET MY BOOKINGS (user)
exports.getMyBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ userId: req.user._id })
    .populate("salonId", "salonName")
    .sort({ createdAt: -1 });

  res.status(200).json(bookings);
});

// GET SALON BOOKINGS (salon owner)
exports.getSalonBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ salonId: req.user._id })
    .populate("userId", "fullName")
    .sort({ createdAt: -1 });

  res.status(200).json(bookings);
});

// GET /api/bookings/salon/overview
exports.getSalonOverview = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ salonId: req.user._id });

  const totalBookings = bookings.length;
  const upcomingBookings = bookings.filter(b => b.status === "Upcoming").length;
  const totalEarnings = bookings
    .filter(b => b.status === "Completed")
    .reduce((sum, b) => sum + b.servicePrice, 0);

  res.json({
    totalBookings,
    upcomingBookings,
    totalEarnings,
    pendingPayouts: 1000, // hardcoded
    latestBookings: bookings.sort((a,b) => b.createdAt - a.createdAt).slice(0,3)
  });
});



// CANCEL BOOKING
exports.cancelBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  if (!booking) {
    res.status(404);
    throw new Error("Booking not found");
  }

  booking.status = "Cancelled";
  await booking.save();

  res.json({ message: "Booking cancelled" });
});

// MARK BOOKING AS COMPLETED (salon owner)
exports.completeBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  if (!booking) {
    res.status(404);
    throw new Error("Booking not found");
  }

  // Ensure only salon owner can update
  if (booking.salonId.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Not authorized");
  }

  booking.status = "Completed";
  await booking.save();

  res.status(200).json(booking);
});


// RESCHEDULE BOOKING
exports.rescheduleBooking = asyncHandler(async (req, res) => {
  const { date, time } = req.body;

  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    res.status(404);
    throw new Error("Booking not found");
  }

  booking.date = date;
  booking.time = time;
  await booking.save();

  res.json({ message: "Booking rescheduled", booking });
});
