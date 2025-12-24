import React from "react";
import { NavLink } from "react-router-dom";
import Salon from "../../assets/images/About-1.jpg";
import BlowDry from "../../assets/images/About-2.jpg";
import HairStyle from "../../assets/images/About-3.jpg";
import MakeUp from "../../assets/images/About-4.jpg";

const AboutPage = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About SalonHub
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            We're on a mission to revolutionize the beauty industry by
            connecting customers with premium salons through a secure,
            easy-to-use platform.
          </p>

          <p className="text-gray-700 leading-relaxed mb-10">
            Founded in 2024, SalonHub has quickly become the go-to platform for
            salon bookings, serving thousands of customers and hundreds of
            salons across the country.
          </p>

          <div className="flex gap-12 mb-10">
            <div>
              <h3 className="text-3xl font-bold text-purple-600">1000+</h3>
              <p className="text-gray-600 text-sm mt-1">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-600">50+</h3>
              <p className="text-gray-600 text-sm mt-1">Partner Salons</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-600">5000+</h3>
              <p className="text-gray-600 text-sm mt-1">Bookings</p>
            </div>
          </div>

          <NavLink
            to="/signup"
            className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-600 text-white px-7 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Join Our Community
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </NavLink>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col gap-6 flex-1">
            <img
              src={Salon}
              alt="salon"
              className="rounded-2xl shadow object-cover h-52 w-full"
            />

            <img
              src={BlowDry}
              alt="Blow dry"
              className="rounded-2xl shadow object-cover h-64 w-full"
            />
          </div>

=          <div className="flex flex-col gap-6 flex-1">
            <img
              src={HairStyle}
              alt="Hair styling"
              className="rounded-2xl shadow object-cover h-64 w-full"
            />

            <img
              src={MakeUp}
              alt="Makeup"
              className="rounded-2xl shadow object-cover h-62 w-full"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutPage;
