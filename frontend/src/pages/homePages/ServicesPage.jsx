import React from "react";
import { NavLink } from "react-router-dom";
import { services } from "../../data/index";

const ServicesPage = () => {
  return (
    <section className="py-20 bg-gray-50 px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">Popular Services</h2>
        <p className="text-gray-500 mt-2">
          Discover our most sought-after beauty treatments
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-8xl mx-auto">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition hover:-translate-y-1 duration-300"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${service.bg}`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="font-bold text-black text-lg mb-2">
                {service.title}
              </h3>

              <p className="text-purple-500 font-bold">
                From {service.price}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-10">
        <NavLink
          to="/signup"
          className="inline-flex items-center gap-2 bg-linear-to-r from-purple-500 to-pink-500 text-white text-md font-medium px-8 py-3 rounded-md"
        >
          Explore All Services
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
    </section>
  );
};

export default ServicesPage;
