const mongoose = require("mongoose");

// Simple regex for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple regex for mobile number validation (Pakistan format example)
const mobileRegex = /^[0-9]{10,15}$/;

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
      minlength: [3, "Full Name must be at least 3 characters"],
      maxlength: [50, "Full Name must be less than 50 characters"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [emailRegex, "Please enter a valid email address"],
    },

    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      match: [mobileRegex, "Please enter a valid mobile number"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
    },

    role: {
      type: String,
      enum: ["customer", "salonOwner", "admin"],
      default: "customer",
    },

    status: {
      type: String,
      enum: ["pending", "active", "frozen"],
      default: function () {
        return this.role === "salonOwner" ? "pending" : undefined;
      },
      required: function () {
        return this.role === "salonOwner";
      },
    },

    salonName: {
      type: String,
      required: function () {
        return this.role === "salonOwner";
      },
      trim: true,
      maxlength: [50, "Salon Name must be less than 50 characters"],
    },

    location: {
      type: String,
    },

    bankAccount: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
