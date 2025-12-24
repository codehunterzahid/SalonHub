import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { User, Mail, Phone, Lock, Store, ArrowLeft } from "lucide-react";

const Signup = () => {
  const [role, setRole] = useState("customer");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-22">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">
        <form className="px-10 py-6">
          {/* Back */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-sm text-orange-500 cursor-pointer mb-2 w-fit"
          >
            <ArrowLeft size={16} />
            Back to Home
          </NavLink>

          <h2 className="text-3xl text-black font-bold mb-2">
            Create an account
          </h2>
          <p className="text-gray-500 mb-4">
            Join manage your beauty experience effortlessly
          </p>

          <div className="space-y-4">
            <Input icon={<User />} placeholder="Full Name" required />
            <Input
              icon={<Mail />}
              placeholder="Email Address"
              type="email"
              required
            />

            {/* Salon Name (only for Salon Owner) */}
            {role === "salon" && (
              <Input icon={<Store />} placeholder="Salon Name" required />
            )}
            <Input icon={<Phone />} placeholder="Phone Number" required />
            <Input
              icon={<Lock />}
              placeholder="Password"
              type="password"
              required
            />
          </div>

          <div className="mt-3">
            <p className="text-sm mb-2 text-gray-600">Register as</p>
            <div className="flex gap-3">
              <RoleButton
                label="Customer"
                active={role === "customer"}
                onClick={() => setRole("customer")}
              />
              <RoleButton
                label="Salon Owner"
                active={role === "salon"}
                onClick={() => setRole("salon")}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
            <input type="checkbox" required />
            <span>
              I agree to the{" "}
              <Link to="/terms" className="text-pink-500 hover:underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-pink-500 hover:underline">
                Privacy Policy
              </Link>
            </span>
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-lg font-semibold text-white cursor-pointer
              bg-linear-to-r from-purple-500 to-pink-500 
              hover:opacity-90 transition"
          >
            Create Account
          </button>

          <p className="text-center text-sm mt-4 text-gray-600">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-pink-500 font-semibold hover:underline"
            >
              Sign in
            </NavLink>
          </p>
        </form>

        <div className="hidden md:flex items-center justify-center p-10 bg-linear-to-r from-purple-500 to-pink-500 text-white">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Salon services, simplified
            </h2>
            <p className="text-lg opacity-90">
              Discover salons, book appointments, manage schedules, and grow
              your beauty business with SalonHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

/* ---------- Components ---------- */

const Input = ({ icon, ...props }) => (
  <div className="flex items-center gap-3 px-4 py-3 rounded-lg border bg-linear-to-r from-purple-50 to-pink-50 focus-within:ring-2 focus-within:ring-pink-400">
    <span className="text-gray-400">{icon}</span>
    <input
      {...props}
      className="w-full bg-transparent outline-none text-gray-700"
    />
  </div>
);

const RoleButton = ({ active, label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex-1 py-2 rounded-lg font-medium border transition
      ${
        active
          ? "bg-linear-to-r from-purple-500 to-pink-500 text-white"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
      }`}
  >
    {label}
  </button>
);
