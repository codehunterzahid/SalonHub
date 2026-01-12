const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
require("dotenv").config();

mongoose.connect("process.env.MONGO_URI");

const createAdmin = async () => {
  const adminExists = await User.findOne({ role: "admin" });
  if (adminExists) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await User.create({
    fullName: "Super Admin",
    email: "admin@salon.com",
    mobile: "0000000000",
    password: hashedPassword,
    role: "admin",
  });

  console.log("Admin created");
  process.exit();
};

createAdmin();

module.exports = createAdmin;