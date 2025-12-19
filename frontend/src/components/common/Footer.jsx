import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Scissors, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const linkClass = "hover:text-pink-500 transition-colors duration-300";

  return (
    <footer className="bg-gray-900 text-gray-200 py-16 sm:px-12">
      {/*Footer Top Section */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-2/5">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-linear-to-r from-purple-500 to-pink-500">
              <Scissors className="text-white" size={24} />
            </div>
            <span className="ml-2 font-bold text-xl text-white">SalonHub</span>
          </div>
          <p className="text-gray-400 mb-4">
            Your trusted platform for premium salon bookings. Connect with
            top-rated salons and enjoy secure, hassle-free appointments.
          </p>
          <p className="flex items-center gap-2 mb-2 text-gray-400">
            <MapPin /> 123 Beauty Lane, New York, NY 10001
          </p>
          <p className="flex items-center gap-2 mb-2 text-gray-400">
            <Phone /> +1 (555) 123-4567
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <Mail /> support@salonhub.com
          </p>
        </div>

        <div className="md:w-3/5 flex flex-col md:flex-row justify-between gap-10">
          {/* Quick Links */}
          <div className="font-bold">
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/features" className={linkClass}>
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={linkClass}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/working" className={linkClass}>
                  How It Works
                </NavLink>
              </li>
              <li>
                <NavLink to="/testimonials" className={linkClass}>
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={linkClass}>
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* For Customers */}
          <div className="font-bold">
            <h3 className="font-semibold text-white mb-4">For Customers</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <NavLink to="/find-salons" className={linkClass}>
                  Find Salons
                </NavLink>
              </li>
              <li>
                <NavLink to="/book-appointment" className={linkClass}>
                  Book Appointment
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-bookings" className={linkClass}>
                  My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/wallet" className={linkClass}>
                  Wallet
                </NavLink>
              </li>
              <li>
                <NavLink to="/help-center" className={linkClass}>
                  Help Center
                </NavLink>
              </li>
            </ul>
          </div>

          {/* For Salons */}
          <div className="font-bold">
            <h3 className="font-semibold text-white mb-4">For Salons</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <NavLink to="/join" className={linkClass}>
                  Join as Salon
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className={linkClass}>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/manage-services" className={linkClass}>
                  Manage Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/analytics" className={linkClass}>
                  Analytics
                </NavLink>
              </li>
              <li>
                <NavLink to="/resources" className={linkClass}>
                  Resources
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Socials*/}
      <div className="mt-10 flex flex-col md:flex-row md:justify-between items-center border-t border-gray-700 py-8">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <span>Follow Us:</span>
          <a href="#">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-linear-to-r from-purple-500 to-pink-500">
              <Facebook size={20} />
            </div>
          </a>
          <a href="#">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-linear-to-r from-purple-500 to-pink-500">
              <Twitter size={20} />
            </div>
          </a>
          <a href="#">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-linear-to-r from-purple-500 to-pink-500">
              <Instagram size={20} />{" "}
            </div>
          </a>
          <a href="#">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-linear-to-r from-purple-500 to-pink-500">
              <Linkedin size={20} />{" "}
            </div>
          </a>
        </div>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="bg-linear-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-md text-white font-medium hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </div>
      </div>

      <hr className="border-t border-gray-700 mt-6" />

      {/* Footer Bottom */}
      <div className="mt-6 flex flex-col md:flex-row justify-between text-gray-200 text-sm pt-4">
        <p>© 2024 SalonHub. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <NavLink to="/privacy" className={linkClass}>
            Privacy Policy
          </NavLink>
          <NavLink to="/terms" className={linkClass}>
            Terms of Service
          </NavLink>
          <NavLink to="/cookies" className={linkClass}>
            Cookie Policy
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
