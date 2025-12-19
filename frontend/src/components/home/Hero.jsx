import React from "react";
import HeroImage from "../../assets/images/Hero.jpg";
import { Calendar } from "lucide-react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-24 bg-linear-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6">
          <span className="inline-flex items-center bg-purple-100 text-purple-600 text-sm font-medium px-4 py-2 rounded-full w-max">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sparkles-icon lucide-sparkles"
            >
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
              <path d="M20 2v4" />
              <path d="M22 4h-4" />
              <circle cx="4" cy="20" r="2" />
            </svg>
            Book Your Perfect Look
          </span>

          <h1 className="text-4xl py-2 sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-600">
            Premium Saloon Bookings Made <br></br> Simple
          </h1>

          <p className="text-gray-700 text-lg max-w-xl py-1.5">
            Connect with top-rated salons in your area. Book appointments
            instantly, pay securely, and enjoy premium beauty services with
            complete confidence.
          </p>

          <div className="flex flex-wrap gap-4">
            <NavLink
              to="/signup"
              className="flex items-center px-6 py-3 rounded-md text-white font-medium bg-linear-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Now
            </NavLink>

            <NavLink
              to="/salon-signup"
              className="px-6 py-3 rounded-md text-purple-600 font-medium border border-purple-500 hover:bg-purple-50 transition"
            >
              Join as Salon
            </NavLink>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-6 flex justify-center items-center p-8 bg-white rounded-3xl shadow-xl">
          <img
            src={HeroImage}
            alt="Salon"
            className="w-4/4 h-80 rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
