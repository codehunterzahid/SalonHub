const Service = require("../models/Service.js");
const asyncHandler = require("../utils/asyncHandler.js");

/* CREATE SERVICE */
exports.createService = asyncHandler(async (req, res) => {
  const { name, duration, price } = req.body;

  if (!name || !duration || !price) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const service = await Service.create({
    name,
    duration,
    price,
    salonId: req.user._id, 
  });

  res.status(201).json(service);
});


/* GET ALL SERVICES */
exports.getServices = asyncHandler(async (req, res) => {
  const services = await Service.find({ salonId: req.user._id }); 
  res.json(services);
});


/* UPDATE SERVICE */
exports.updateService = asyncHandler(async (req, res) => {
  const { name, duration, price } = req.body;

  const service = await Service.findById(req.params.id);

  if (!service) {
    return res.status(404).json({ message: "Service not found" });
  }

  // Only allow the owner of the service
  if (service.salonId.toString() !== req.user._id.toString() && req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }

  service.name = name || service.name;
  service.duration = duration || service.duration;
  service.price = price || service.price;
  service.salonId = service.salonId || req.user._id; 

  const updatedService = await service.save();

  res.status(200).json(updatedService);
});

/* DELETE SERVICE */
exports.deleteService = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const service = await Service.findById(id);

  if (!service) {
    return res.status(404).json({ message: "Service not found" });
  }

  await service.deleteOne();
  res.json({ message: "Service deleted successfully" });
});
