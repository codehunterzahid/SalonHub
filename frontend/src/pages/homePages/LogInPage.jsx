import { Link, NavLink } from "react-router-dom";
import { Mail, Lock, ArrowLeft } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f6f2] px-4 pt-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">

        {/* Left Side */}
        <form className="p-10">
          
          {/* Back */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-sm text-orange-500 cursor-pointer mb-6 w-fit"
          >
            <ArrowLeft size={16} />
            Back to Home
          </NavLink>

          <h2 className="text-3xl text-black font-bold mb-2">Welcome back</h2>
          <p className="text-gray-500 mb-8">
            Login to continue using SalonHub
          </p>

          {/* Inputs */}
          <div className="space-y-4">
            <Input icon={<Mail />} placeholder="Email Address" type="email" required />
            <Input icon={<Lock />} placeholder="Password" type="password" required />
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center mt-4 text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-pink-500" />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-orange-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-lg font-semibold text-white
              bg-linear-to-r from-purple-500 to-pink-500
              hover:opacity-90 transition"
          >
            Sign In
          </button>

          <p className="text-center text-sm mt-6 text-gray-600">
            Don’t have an account?{" "}
            <NavLink
              to="/signup"
              className="text-pink-500 font-semibold hover:underline"
            >
              Sign up
            </NavLink>
          </p>
        </form>

        {/* Right */}
        <div className="hidden md:flex items-center justify-center p-10 bg-linear-to-r from-purple-500 to-pink-500 text-white">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Welcome back!
            </h2>
            <p className="text-lg opacity-90">
              Login to manage your salon appointments, track bookings,
              and grow your business with SalonHub.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;

/* ---------- Input Component ---------- */

const Input = ({ icon, placeholder, type = "text", required }) => (
  <div
    className="flex items-center gap-3 px-4 py-3 rounded-lg border
      bg-linear-to-r from-purple-50 to-pink-50
      focus-within:ring-2 focus-within:ring-pink-400"
  >
    <span className="text-gray-400">{icon}</span>
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full bg-transparent outline-none text-gray-700"
    />
  </div>
);
