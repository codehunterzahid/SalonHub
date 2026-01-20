const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ================= SIGNUP =================
exports.signup = async (req, res) => {
  try {
    const { fullName, email, mobile, password, role, salonName } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      mobile,
      password: hashedPassword,
      role,
      salonName: role === "salonOwner" ? salonName : undefined,
    });

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= LOGIN =================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
      redirectedTo:
        user.role === "customer"
          ? "/user"
          : user.role === "salonOwner"
          ? "/salon"
          : "/admin",
    });

    /*
    res.json({
      token,
      role: user.role,
      redirectedTo:
        user.role === "customer"
          ? "/user"
          : user.role === "salonOwner"
          ? "/salon"
          : "/admin",
    });
*/
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// ================= DASHBOARDS =================
exports.userDashboard = (req, res) => {
  res.json({ message: "Welcome to User Dashboard" });
};

exports.salonDashboard = (req, res) => {
  res.json({ message: "Welcome to Salon Owner Dashboard" });
};

exports.adminDashboard = (req, res) => {
  res.json({ message: "Welcome to Admin Dashboard" });
};
